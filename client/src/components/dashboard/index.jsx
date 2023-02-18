import React from 'react'
import { useEffect } from 'react';

import Nav from "../navbar";
import { useNavigate } from "react-router-dom";

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
      <img src="https://pic-bstarstatic.akamaized.net/ugc/64dee9896cf4ece8f516bc13a72a83d5.jpeg" style={{width: "100%", height:"100%" ,zIndex: -1, position:"absolute"}}/>
      <button style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "white", border: "none", fontSize: "30px", fontWeight: "bold"}} onClick={() => navigate("/dashboard/clickpicture")}>Click To report a pothole</button>
      </div>
    );
}
