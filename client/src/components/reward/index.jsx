import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

// import "./style.css"

export default function Reward({coin = 0, balance = 0,auth}) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.isLoggedIn) {
          navigate("/");
        }
      },[])
  return (
    <div>
        <div>
            You have recived {coin}
        </div>
        <div>
            Your balance total is {balance + coin}
        </div>
    </div>
  )
}
