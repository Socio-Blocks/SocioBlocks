import React, { useEffect,useState } from "react";
import MapmyIndia from "mapmyindia-react";

import { useNavigate } from "react-router-dom";
import Nav from "../../navbar";

export default function Maps({ setCoords,auth }) {
  
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
            draggable: true,
            title: "Your location",
            onClick: (e) => {
              console.log("clicked ");
            },
            onDragend: (e) => {
              setStatus(
                "You have moved the pin, your reward will be calculated accordingly"
              );
              setLat(e.target._latlng.lat);
              setLng(e.target._latlng.lng);
            },
          },
        ]}
      />

      <div>
        Your cordinates are {lat} and {lng}
      </div>
      <div>
        if u think its wrong then move the pin to the appropriate location
      </div>
      <div>{status}</div>
      <button
        onClick={() => {
          setgpscords();
          window.location.reload(false);
        }}
      >
        Use GPS
      </button>
      <button
        onClick={() => {
          setCoords({
            lat: lat,
            lng: lng,
          });
          navigate("/dashboard/clickpicture");
        }}
      >
        Use Coordinates
      </button>
    </div>
  );
}
