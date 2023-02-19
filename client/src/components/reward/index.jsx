import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../navbar";
import { get_balance, get_hash } from "../../test.js";
import { MODEL_URL } from "../../constants";
import Zoom from "@mui/material/Zoom";
import Skeleton from "@mui/material/Skeleton";

// import "./style.css"
import axios from "axios";

const Unstable = React.memo(function Reward({
  coin = 0,
  balance = 0,
  setBalance,
  auth,
  walletAddress,
  hashArray,
  setHashArray,
  status
}) {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    // setHashArray([]);
    console.log("%c%s", "color: #ff0000", "getbalance");
    const getbalance = async () => {
      let balance_data = await get_balance(walletAddress);
      setBalance(balance_data);

      const hash_data = await get_hash(walletAddress);
      var link_arr = [];
      axios
        .post(MODEL_URL + "/api/reciveimg", { hash: hash_data })
        .then((res) => {
          link_arr = res;
          console.log(link_arr);
          setHashArray(link_arr.data);
          setShow(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getbalance();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Nav />
      <h3>{status}</h3>
      <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        Your total balance adds up to{" "}
        {parseInt(balance) / parseFloat(1000000000000000000) + coin} SC
      </h2>
      <div>
      <div style={{ display: "flex",flexDirection:"row",alignItems:"center",flexWrap: "wrap" }}>
          {show ? (
            hashArray.map((item, index) => {
              return (
                
                  <Zoom
                    key={index}
                    in={show}
                    style={{
                      transitionDelay: show ? `${500 * index}ms` : "0ms",margin:"2em"
                    }}
                  >
                    <img
                      src={item}
                      alt="img"
                      style={{ aspectRatio: 1, width:300, height:200 }}
                    />
                  </Zoom>
              );
            })
          ) : (<>
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            <Skeleton variant="rectangular" width={300} height={200} sx={{margin:"2em"}}  />
            </>
          )}
         </div>
      </div>
    </div>
  );
});

export default Unstable;
