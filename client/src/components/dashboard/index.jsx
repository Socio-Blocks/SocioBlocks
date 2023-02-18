import React from 'react'
import { useEffect } from 'react';
import "./dashboard.css"
import Nav from "../navbar";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
export default function Dashboard({auth,setWalletAddress}) {


  const navigate = useNavigate();
  useEffect(() => {
      if (!auth.isLoggedIn) {
        navigate("/Authentication");
      }
    },[])

    return (
      <div style={{overflow: "hidden"}}>
        <Nav/>
      {/* <img src="https://pic-bstarstatic.akamaized.net/ugc/64dee9896cf4ece8f516bc13a72a83d5.jpeg" style={{width: "100%", height:"100%" ,zIndex: -1, position:"absolute"}}/> */}
      <Button variant="contained"color="secondary" startIcon={<CameraAltIcon/>} style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} onClick={() => navigate("/dashboard/clickpicture")}>Click To report a pothole</Button>
      </div>
    );
}
