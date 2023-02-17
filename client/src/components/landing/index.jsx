import React,{useEffect} from 'react'

import { useNavigate } from "react-router-dom";
import Nav from "../navbar";

export default function Landing({auth}) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.isLoggedIn) {
          navigate("/Authentication");
        }
      },[])

  return (
    <div>
      <Nav auth={auth}/>
      
    </div>
  )
}
