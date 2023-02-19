import requests
import json
import random
headers = {
    'Authorization': 'prj_test_sk_9958595ae71743f079a2c0c2fa4f5c0ca983dae1',
    'Content-Type': 'application/x-www-form-urlencoded',
}
from flask import Flask,request
app = Flask(__name__)

#allow cors 
from flask_cors import CORS
CORS(app)
radius = 2

@app.route('/api/fence',methods = ['POST'])
def geofence_checker():
    latitude,longitude = 0,0
    print(request.json)
    latitude = request.json['lat']
    longitude = request.json['lng']
    url = 'https://api.radar.io/v1/context?coordinates=%(latitude)s,%(longitude)s'%{"latitude":latitude,"longitude":longitude}
    response = requests.get(url, headers=headers)
    resp = response.content
    resp_data = json.loads(resp.decode("UTF-8"))
    geofence = resp_data['context']['geofences']
    if geofence:
        geofence_id = resp_data['context']['geofences'][0]['externalId']
        print(geofence_id)
        print("CAll checker function of smart contract to check if the pothole geofence is older than 10 days")
        return {"geofence_id":geofence_id , "status":"inside geofence"}
    
    else:
        print("no fences found")
        tag_id = random.randint(100, 999)
        tag = str(tag_id)
        geofence_creator(tag,longitude,latitude)
        print("Call add_reporter function of the smart contract give params of wallet_address,..etc")
        return {"geofence_id":tag , "status":"outside geofence"}



def geofence_creator(tag_id,longitude,latitude):
    data = 'description=pothole&type=circle&coordinates=[%(longitude)s,%(latitude)s]&radius=2'%{'longitude' : longitude, 'latitude':latitude}
    response = requests.put('https://api.radar.io/v1/geofences/potholeplace/'+tag_id, headers=headers, data=data)
    print(response)


if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=5001)