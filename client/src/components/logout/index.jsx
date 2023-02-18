import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Logout({auth}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.isLoggedIn) {
          navigate("/Authentication");
        }
      },[])
  return (
    <div>

    </div>
  )
}
