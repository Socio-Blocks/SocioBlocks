import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Nav from "../navbar";
import {get_balance} from '../../test.js'

// import "./style.css"

export default function Reward({coin = 0, balance = 0,setBalance,auth,walletAddress}) {


    useEffect(() => {
        async function getbalance() {
            let balance_data = await get_balance(walletAddress)
            console.log(balance_data)
            setBalance(balance_data)
        }
        getbalance()
    },[])


    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.isLoggedIn) {
          navigate("/");
        }
      },[])
  return (
    <div>
      <Nav/>
        <div>
            You have recived {coin} SC
        </div>
        <div>
            Your total balance is {parseInt(balance) / parseFloat(1000000000000000000) + coin} SC
        </div>
    </div>
  )
}
