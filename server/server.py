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

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)

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
    if(np.argmax(op) == 1):
        print("Pothole")
        return 'Success'
    else:
        print("No Pothole")
        return 'Failed'
	# Returning an api for showing in reactjs
    return 'Failed'

	
# # Running app
if __name__ == '__main__':
	app.run(debug=True, host='localhost', port=5000)

# from flask import Flask
# import datetime
# app = Flask(__name__)

# #allow cors 
# from flask_cors import CORS
# CORS(app)
# x = datetime.datetime.now()

# @app.route('/api/pothole',methods = ['POST'])
# def image():
#     print("Hello World")
#     return {
# 		'Name':"geek",
# 		"Age":"22",
# 		"Date":x,
# 		"programming":"python"
# 		}



# if __name__ == "__main__":
#     app.run(debug=True, host='localhost', port=5000)
