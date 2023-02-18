import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export default function Account({auth,walletAddress}) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.isLoggedIn) {
          navigate("/Authentication");
        }

        auth.provider.rpcConfig.chainId = 0x1389
        auth.provider.rpcConfig.blockExplorerUrls = ["https://rpc.testnet.mantle.xyz/"]

      },[])


  return (
    <div>
        <h1>Your Account</h1>
        <div>Wallet address: {walletAddress}</div>
        <div>Network connected to: https://rpc.testnet.mantle.xyz/ </div>
        <div>auth.provider.rpcConfig.chainId: 5001</div>
    </div>
  )
}
