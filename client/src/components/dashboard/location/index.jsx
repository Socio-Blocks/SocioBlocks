import React, { useEffect,useState } from "react";
import MapmyIndia from "mapmyindia-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../../navbar";
import {sendCoinParams,execute_function,setCheckParams} from "../../../test.js"

export default function Maps({ setCoords,auth,walletAddress,setCoin,iscorrectimg,setIscorrectimg }) {
  
  const navigate = useNavigate();
  // useEffect(() => {
  //     if (!auth.isLoggedIn) {
  //       navigate("/Authentication");
  //     }
  //   },[])
  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);

  const [status, setStatus] = React.useState("gps coordinates used");

  useEffect(() => {
    console.log(lat, lng);
  }, [lat, lng]);

  const setgpscords = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };


  const takecords = async () => {
    await axios.post("http://localhost:5001/api/fence", {
      lat: lat,
      lng: lng,
    }).then(function (response) {
      console.log(response);
      if (response.data.status === "outside geofence") {
        setStatus("coordinates are valid");
        sendCoinParams(walletAddress,1,response.data.geofence_id,10)
        setCoin(2)
        execute_function("addreporter")
        setIscorrectimg(false)
      } else {
        setStatus("coordinates are invalid");
        setCheckParams(response.data.geofence_id,walletAddress)
        execute_function("check")
        setIscorrectimg(false)
      }
    });
    setCoords({
      lat: lat,
      lng: lng,
    });
    

    navigate("/rewards");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);

  return (
    <div style={{ }}>
      <Nav />
      <MapmyIndia
        markers={[
          {
            position: [lat, lng],
            draggable: false,
            title: "Your location",
            onClick: (e) => {
              console.log("clicked ");
            },
            onDragend: (e) => {
              setLat(e.target._latlng.lat);
              setLng(e.target._latlng.lng);
            },
          },
        ]}
      />

      <div>
        Your cordinates are {lat} and {lng}
      </div>
      <div>{status}</div>
{iscorrectimg?
<>
      <button
        onClick={() => {
          setgpscords();
        }}
      >
        Use GPS
      </button>
      <button
        onClick={() => {
          takecords();
        }}
      >
        Use Coordinates
      </button></>:  <></>

}
    </div>
  );
}
