# Import flask and datetime module for showing date and time
from flask import Flask, request, jsonify
import datetime
import tensorflow as tf
import numpy as np
from flask_cors import CORS, cross_origin
import base64
import pygame
from io import BytesIO
import cv2
from pinatapy import PinataPy
import requests
import json

pinata_api_key = "eac222c6682ef06e91f8"
pinata_secret_api_key = "09e5e8d1c6ff279ce8ccb581a440bbe6764ec18dc7ed7302a5bce666e62b9ad6"
headers = {
    'x-kek-auth': '5Uo9hDVIhwRmDRdz.G1w5Wg8vfQIlVu6J6,he9tylVMOj8hIRja5b',
}

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)


def uploader(filename):
    pinata = PinataPy(pinata_api_key, pinata_secret_api_key)
    response = pinata.pin_file_to_ipfs(filename)
    return response['IpfsHash']


def retriever(hashh,filename):
    url = "https://ipfs.io/ipfs/"+hashh
    img_data = requests.get(url).content
    with open(filename, 'wb') as writer:
        writer.write(img_data)
    files = {
        'file': open(filename, 'rb'),
    }
    response = requests.post('https://kek.sh/api/v1/posts', headers=headers, files=files)
    a = response.content
    b = json.loads(a)
    c = b['filename']
    img_url = 'https://i.kek.sh/'+c
    #   print(url_ll)
    return img_url



def get_image(file_location):
    img = cv2.imread(file_location)
    img = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img = img/255
    img = cv2.resize(img,(200, 200))
    return img

# Route for seeing a data
@app.route('/api/pothole', methods=['POST'])
def image():
    pygame.init()
    raw_data = request.data
    raw_data = raw_data.split(b',')[1]

    # Decode the base64 data
    image_data = base64.b64decode(raw_data)

    # Load the image from the decoded data using Pygame
    image = pygame.image.load(BytesIO(image_data))

    # Save the image to a JPEG file
    pygame.image.save(image, 'output.jpg')
    model = tf.keras.models.load_model('./Model/Model95')
    im_dat = np.array([get_image(f"./output.jpg")])
    op = model.predict(im_dat)
    op = op[0][0]
    print(op)
    if(np.argmax(op) == 0):
        print("Pothole")
        file = "output"
        a = uploader(file)
        print(a)
        return 'Success'
    else:
        print("No Pothole")
        return 'Failed'
	# Returning an api for showing in reactjs
    return 'Failed'


@app.route('/api/reciveimg', methods=['POST'])
def reciveimg():
    b = input("enter file name: ")
    retriever(a,b)



# # Running app
if __name__ == '__main__':
	app.run(debug=True, host='localhost', port=5000)
