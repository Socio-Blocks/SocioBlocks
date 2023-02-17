import requests
import json
import random
headers = {
    'Authorization': '-api-key',
    'Content-Type': 'application/x-www-form-urlencoded',
}
radius = 2


def geofence_checker(latitude,longitude):
    url = 'https://api.radar.io/v1/context?coordinates=%(latitude)s,%(longitude)s'%{"latitude":latitude,"longitude":longitude}
    response = requests.get(url, headers=headers)
    resp = response.content
    resp_data = json.loads(resp.decode("UTF-8"))
    geofence = resp_data['context']['geofences']
    if geofence:
        geofence_id = resp_data['context']['geofences'][0]['externalId']
        print(geofence_id)
        print("CAll checker function of smart contract to check if the pothole geofence is older than 10 days")
    else:
        print("no fences found")
        tag_id = random.randint(100, 999)
        tag = str(tag_id)
        geofence_creator(tag,longitude,latitude)
        print("Call add_reporter function of the smart contract give params of wallet_address,..etc")


def geofence_creator(tag_id,longitude,latitude):
    data = 'description=pothole&type=circle&coordinates=[%(longitude)s,%(latitude)s]&radius=2'%{'longitude' : longitude, 'latitude':latitude}
    response = requests.put('https://api.radar.io/v1/geofences/potholeplace/'+tag_id, headers=headers, data=data)
    print(response)

#uncomment to run test function
#geofence_checker('13.007834348790443', '77.57282200643067')
