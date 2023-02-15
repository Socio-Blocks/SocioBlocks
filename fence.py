import requests
import json
import random
headers = {
    'Authorization': 'prj_live_sk_...',
    'Content-Type': 'application/x-www-form-urlencoded',
}
radius = 2


def geofence_creator(tag,tag_id,longitude,latitude):
    data = 'description=pothole&type=circle&coordinates=[{},{}]&radius={}'%longitude,latitude,radius
    response = requests.put('https://api.radar.io/v1/geofences/'+tag+'/'+tag_id, headers=headers, data=data)


def geofence_checker(longitude,latitude):
    url = 'https://api.radar.io/v1/context?coordinates={},{}'%latitude,longitude
    response = requests.get(url, headers=headers)
    resp = response.content
    resp_data = json.loads(resp.decode("UTF-8"))
    geofence = resp_data['context']['geofences']['tag']
    if geofence:
        print("ur inside the geofence nigga.. no coins fr you")
    else:
        print("lucky fella u get some coins now")
        tag = resp_data['context']['place']['postalCode']['code']
        tag_id = random.randint(100,999)
        geofence_creator(tag,tag_id,longitude,latitude)







