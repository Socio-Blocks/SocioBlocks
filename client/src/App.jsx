import { Auth, useAuth } from "@arcana/auth-react";
import { AuthProvider } from '@arcana/auth' // From npm
import React ,{ useEffect } from "react";
import  Authentication  from "./components/auth"; 
import Dashboard from "./components/dashboard";
import Leaderboard from "./components/dashboard/leaderboard";
import Clickpic from "./components/dashboard/clickpic";
import Reward from "./components/reward";
import Maps from "./components/dashboard/location"
import Nav from "./components/navbar";
import Landing from "./components/landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [coin, setCoin] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [walletAddress, setWalletAddress] = React.useState(0);
  const auth = useAuth();
  const [coords, setCoords] = React.useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    console.log(auth);
  }, [auth]);


  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard auth={auth}/>}/>
        <Route path="/Authentication" element={<Authentication auth = {auth}/>}/>
        <Route path="/dashboard" element={<Dashboard auth={auth}/>}/>
        <Route path="/dashboard/leaderboard" element={<Leaderboard />}/>
        <Route path="/dashboard/clickpicture" element={<Clickpic />}/>
        <Route path="/rewards" element={<Reward coin={coin} balance={balance} auth={auth}/>}/>
        <Route path="/dashboard/location" element={<Maps setCoords={setCoords} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;