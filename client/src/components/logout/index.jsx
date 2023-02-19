import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export default function Logout({auth}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.isLoggedIn) {
            navigate("/Authentication");
        }else{
            auth.logout();
            navigate("/Authentication");
            window.location.reload(false);
        }
      },[])
  return (
    <div>

    </div>
  )
}
