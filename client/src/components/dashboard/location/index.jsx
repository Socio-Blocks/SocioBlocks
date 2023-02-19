import React, { useEffect,useState } from "react";
import MapmyIndia from "mapmyindia-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../../navbar";
import {sendCoinParams,execute_function,setCheckParams,checker_10} from "../../../test.js"
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import nav from "../../../assets/nav.gif"
import { FENCE_URL } from "../../../constants";

export default function Maps({ setCoords,auth,walletAddress,setCoin,iscorrectimg,setIscorrectimg,hash,setStatus,setShowModal }) {
  
  const navigate = useNavigate();
  useEffect(() => {
      if (!auth.isLoggedIn) {
        navigate("/Authentication");
      }
      setCoin(false)
    },[])
  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);
  const [address, setAddress] = React.useState({});


  const check10 = async (geofence_id) => {
    var did10 = await checker_10(geofence_id)
    console.log(did10)
    if(did10 == "Failed"){
      setStatus("Sorry! the same location has been reported before");
    }else{
      setStatus("Congratulations you have earned 2 coins");
      setCoin(true)
    }
  }


  const takecords = async () => {
    // console.log(lat, lng);
    await axios.post(FENCE_URL +"/api/fence", {
      lat: lat,
      lng: lng,
    }).then(function (response) {
      console.log(response);
      if (response.data.status === "outside geofence") {
        setStatus("Congratulations you have earned 2 coins");
        sendCoinParams(walletAddress,1,response.data.geofence_id,10,hash)
        setCoin(true)
        setShowModal(true)
        execute_function("addreporter")
        setIscorrectimg(false)
      } else {
        setCheckParams(response.data.geofence_id,walletAddress,hash)
        execute_function("check")
        check10(response.data.geofence_id)
        setIscorrectimg(false)
        setShowModal(true)
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
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        var options = {
          method: 'GET',
          url: 'https://apis.mapmyindia.com/advancedmaps/v1/d045ace116f09ed26fea3221efd9c193/rev_geocode',
          params: {lat: position.coords.latitude, lng: position.coords.longitude}
        };
        
        axios.request(options).then(function (response) {
          setAddress(response.data.results[0])
        }).catch(function (error) {
          console.error(error);
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);


  useEffect(() => {
    console.log(address);
  }, [address]);

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

<div style={{height:"100%",display:"flex",alignItems:"center",flexDirection:"column",margin:"1em"}}>

{/* your coordinates: {lat}, {lng} */}
<Card sx={{ maxWidth: 700,margin: "2em",display:"flex",flexDirection:"row" }}>
      <CardMedia
        sx={{ width: 300, "@media (max-width: 600px)": {
          display:"none",
        } }}
        src={nav}
        title="Your address"
      >
      <img src={nav} style={{height: "100%", width:"100%"}}/></CardMedia>
      <CardContent sx={{backgroundColor:"#1a2027", color:"white"}}>
        <Typography gutterBottom variant="h5" component="div">
          Address
        </Typography>
        <Typography variant="body2" >
          {address.formatted_address}
        </Typography>
      </CardContent>
    </Card>


    {iscorrectimg?
<><Fab variant="extended" color="secondary" onClick={()=> takecords()}>
<NavigationIcon sx={{ mr: 1 }} />
Use current location
</Fab></>:<></>
}

</div>

    </div>
  );
}
