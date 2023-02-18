import React,{useEffect} from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Nav from "../../navbar";


export default function Clickpic(props) {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
      if (!props.auth.isLoggedIn) {
        navigate("/Authentication");
      }
    },[])
  const [dataUri, setDataUri] = React.useState("");


  function handleTakePhoto(dataUri) {
    console.log("takePhoto");
  }

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto", dataUri);
  }

  function handleCameraError(error) {
    console.log("handleCameraError", error);
  }

  function handleCameraStart(stream) {
    console.log("handleCameraStart");
  }

  function handleCameraStop() {
    console.log("handleCameraStop");
  }

  function cameraClosed(){
    navigate("/dashboard");
  }


  async function  onCapture(dataUri) {
    setLoading(true);
    setDataUri(dataUri);
    var res = await axios.post("https://32cf-2406-7400-73-e557-c8e4-3f24-69e4-a4d0.in.ngrok.io/api/pothole", {
        image: dataUri
      })
      .then(function (response) {
        console.log(response);
        if(response.data === "Success"){
          //call blockchain function
          props.setIscorrectimg(true)
          navigate("/dashboard/location");
        }else{
          setResponse("Image is not clear please try again")
          setTimeout(() => {

          setLoading(false)
          setResponse("")
        
        }, 3000);
        }
      })
  }

  return (
    <>
        <Nav/>
    <div
        variant="outlined"
        style={{ width: "80%", marginLeft: "10%", marginTop: "150px" }}
      >
        {loading ? (<>Processing your Image Please wait for a response <h3>{response}</h3></>): 
        
      (
        <>
        <Camera
        onTakePhoto={dataUri => {
          onCapture(dataUri);
        }}
        onTakePhotoAnimationDone={dataUri => {
          handleTakePhotoAnimationDone(dataUri);
        }}
        onCameraError={error => {
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
        onCameraStart={stream => {
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
        fontSize: "18px"
      }}
    >
      <b>Click a Picture with a Pothole to get started!</b>
    </div>

      </>
      )
      
      }


        <button
          style={{
            padding: "10px",
            marginTop: "10px",
            marginLeft: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none"
          }} onClick={() => {cameraClosed()}}>
          Close Camera
        </button>
      </div>
      </>
  )
}


