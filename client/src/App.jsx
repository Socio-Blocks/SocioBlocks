import { Auth, useAuth } from "@arcana/auth-react";
import { AuthProvider } from '@arcana/auth' // From npm
import React ,{ useEffect,useState } from "react";
import  Authentication  from "./components/auth"; 
import Dashboard from "./components/dashboard";
import Leaderboard from "./components/dashboard/leaderboard";
import Clickpic from "./components/dashboard/clickpic";
import Unstable from "./components/reward";
import Maps from "./components/dashboard/location"
import Nav from "./components/navbar";
import Landing from "./components/landing";
import Account from "./components/account";
import Logout from "./components/logout";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [coin, setCoin] = useState(true);
  const [balance, setBalance] = useState(0);
  const [walletAddress, setWalletAddress] = useState(0);
  const auth = useAuth();
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0
  });
  const [iscorrectimg, setIscorrectimg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hash, setHash] = useState("");
  const [hashArray, setHashArray] = useState([]);
  
  const [status, setStatus] = useState("");
  useEffect(() => {
    // console.log(auth);

    if(auth.user)
    setWalletAddress(auth.user.address);


  }, [auth]);


  useEffect(() => {
    console.log('%c%s', 'color: #00a3cc', status);
  }, [status])



  return (
    <Router>
    <div>
      <Routes>
        <Route path="/Authentication" element={<Authentication auth = {auth}/>}/>
        <Route path="/" element={<Dashboard auth={auth} setWalletAddress={setWalletAddress}/>}/>
        <Route path="/dashboard" element={<Dashboard auth={auth}/>}/>
        <Route path="/dashboard/leaderboard" element={<Leaderboard  />}/>
        <Route path="/dashboard/clickpicture" element={<Clickpic auth={auth} walletAddress={walletAddress}  setIscorrectimg={setIscorrectimg} setHash={setHash}/>}/>
        <Route path="/rewards" element={<Unstable showModal={showModal} setShowModal={setShowModal} setCoin={setCoin} status={status} hashArray={hashArray}setHashArray={setHashArray}coin={coin} balance={balance} auth={auth} setBalance={setBalance} walletAddress={walletAddress} />}/>
        <Route path="/dashboard/location" element={<Maps setShowModal={setShowModal} setStatus={setStatus} setCoords={setCoords} auth={auth} walletAddress={walletAddress} setCoin={setCoin} iscorrectimg={iscorrectimg} setIscorrectimg={setIscorrectimg} hash={hash}/>} />
        <Route path="/Account" element={<Account auth={auth} walletAddress={walletAddress}/>}/>
        <Route path="/logout" element={<Logout auth={auth}/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;