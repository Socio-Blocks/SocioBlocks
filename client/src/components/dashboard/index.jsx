import React from "react";
import { useEffect } from "react";
import "./dashboard.css";
import Nav from "../navbar";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
export default function Dashboard({auth,setWalletAddress,setCoin}) {

  const style = {
    width: "30vw",
    margin: "7vh",
    aspectRatio: "1/1",
    // make the image bigger on mobile
    "@media (max-width: 600px)": {
      height: "80vh",
      margin: "7vh",
      
    },
  };
  const navigate = useNavigate();
  useEffect(() => {
      if (!auth.isLoggedIn) {
        navigate("/Authentication");
      }
      setCoin(false)
    },[])

  return (
    <div style={{ overflow: "hidden",height:"100vh" }}>
      <Nav />
      <div style={{display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "@media (max-width: 600px)": {
                  height: "80vh",
                },
                
                }}>
      <h1 style={{
          marginTop: "2vh"
        }}>BitPave - The solution to potholes</h1>
      <img
        src="https://media.discordapp.net/attachments/1008571139821412372/1076119422357491732/madan_give_a_high_quality_animated_picture_for_the_home_page_of_fb569b2e-0bd1-4810-884c-8873823ac392.png?width=563&height=563"
        style={style}
      ></img>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<CameraAltIcon />}
        style={{
        }}
        onClick={() => navigate("/dashboard/clickpicture")}
      >
        Click To report a pothole
      </Button>
      </div>
    </div>
  );
}
