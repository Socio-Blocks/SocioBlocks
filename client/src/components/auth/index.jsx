import { Auth, useAuth } from "@arcana/auth-react";
import { AuthProvider } from '@arcana/auth' // From npm
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Authentication({auth}) {

  const navigate = useNavigate();

    const getdata = async () => {
  
    };
  
    const onLogin = () => {
      // Route to authenticated page
      navigate("/dashboard");
    }


  return (
    <div>
    {auth.loading ? (
      "Loading"
    ) : auth.isLoggedIn ? (
      <div> 
        {onLogin()}
      </div>
    ) : (
      <div>
        <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
      </div>
    )}
  </div>
  )
}
