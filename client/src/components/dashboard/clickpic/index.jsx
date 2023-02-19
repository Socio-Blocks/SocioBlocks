import React, { useEffect } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../navbar";
import { MODEL_URL } from "../../../constants";
import { fontFamily } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Clickpic(props) {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
      if (!props.auth.isLoggedIn) {
        navigate("/Authentication");
      }
      props.setCoin(false)
    },[])
  const [dataUri, setDataUri] = React.useState("");

  function handleTakePhoto(dataUri) {
    console.log("");
  }

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("");
  }

  function handleCameraError(error) {
    console.log("");
  }

  function handleCameraStart(stream) {
    console.log("");
  }

  function handleCameraStop() {
    console.log("");
  }

  function cameraClosed() {
    navigate("/dashboard");
  }

  async function onCapture(dataUri) {
    setLoading(true);
    setDataUri(dataUri);
    var res = await axios
      .post(MODEL_URL + "/api/pothole", {
        image: dataUri,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.status === "Success") {
          props.setIscorrectimg(true);
          props.setHash(response.data.hash);
          navigate("/dashboard/location");
        } else {
          setResponse("Image is not clear please try again");
          setTimeout(() => {
            setLoading(false);
            setResponse("");
          }, 3000);
        }
      });
  }

  return (
    <>
      <Nav />
      <div
        variant="outlined"
        style={{display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80vw", marginLeft: "10%", marginTop: "10vh" }}
      >
        {loading ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              style={{
                height: "50vh",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  marginBottom: "2em",
                }}
              >
                Processing your Image. Please wait for a response
                <br />
                <CircularProgress style={{ marginTop: "1em" }} />
              </div>
            </Box>{" "}
            <h3>{response}</h3>
          </>
        ) : (
          <>
            <Camera
              onTakePhoto={(dataUri) => {
                onCapture(dataUri);
              }}
              onTakePhotoAnimationDone={(dataUri) => {
                handleTakePhotoAnimationDone(dataUri);
              }}
              onCameraError={(error) => {
                handleCameraError(error);
              }}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              idealResolution={{ width: 600, height: 480 }}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution={true}
              isImageMirror={false}
              isSilentMode={false}
              isDisplayStartCameraError={true}
              isFullscreen={false}
              sizeFactor={1}
              onCameraStart={(stream) => {
                handleCameraStart(stream);
              }}
              onCameraStop={() => {
                handleCameraStop();
              }}
            />
            <div
              style={{
                marginTop: "-5px",
                textAlign: "center",
                fontSize: "18px",
                marginTop: "2em",
                marginBottom: "2em"
              }}
            >
              <b>Click a Picture with a Pothole to get started!</b>
            </div>
          </>
        )}
        <button
          style={{
            padding: "10px",
            marginTop: "10px",
            marginLeft: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
          }}
          onClick={() => {
            cameraClosed();
          }}
        >
          Close Camera
        </button>
      </div>
    </>
  );
}
