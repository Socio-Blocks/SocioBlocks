import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../navbar";
import { get_balance, get_hash } from "../../test.js";
import { MODEL_URL } from "../../constants";
import Zoom from "@mui/material/Zoom";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./style.css"

// import "./style.css"
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Unstable = React.memo(function Reward({
  coin,
  balance = 0,
  setBalance,
  auth,
  walletAddress,
  hashArray,
  setHashArray,
  status,
  showModal,
  setShowModal
})

{
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
  const handleClose = () => setShowModal(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div>
        <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image src="./coin.gif" alt="Coin" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you for reporting the pothole, we will take care of it soon.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {status}
          </Typography>
        </Box>
      </Modal>
      <Nav />
      {/* <h3 style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto",
        }}>
      {status}</h3> */}
      <div class="buttons">
      <button class="btn-hover color-9">
        Your total balance adds up to{" "}
        <span class="amount">{parseInt(balance) / parseFloat(1000000000000000000) + parseInt(coin)} SC</span></button>
      </div>
      <div>
      {show ? (
      <h2 style={{
        display: "flex",
        fontFamily: "Roboto",
        backgroundColor: "black",
        color: "white",
        width: '100vw',
        padding:'2em'
      }}>Your recent clicks</h2>)
      :<></>
      }
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {show ? (

            hashArray.map((item, index) => {
              return (
                <Zoom
                  key={index}
                  in={show}
                  style={{
                    transitionDelay: show ? `${500 * index}ms` : "0ms",
                    margin: "2em",
                  }}
                >
                  <img
                    src={item}
                    alt="img"
                    style={{ aspectRatio: 1, width: 300, height: 200 }}
                  />
                </Zoom>
              );
            })
          ) : (
            <>
            <>
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
              <Skeleton
                variant="rectangular"
                width={300}
                height={200}
                sx={{ margin: "2em" }}
              />
            </>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default Unstable;
