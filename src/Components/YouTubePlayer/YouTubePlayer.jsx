import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { getLinkcamaras } from "../../Redux/Actions";
import style from "./YoutubePlayer.module.css";

//componente para renderizar los videos de las transmisiones
function App() {
  const dispatch = useDispatch();
  const [videoToShow, setVideoToShow] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getLinkcamaras());
  }, [videoToShow]);
  const linkcamaras = useSelector((state) => state.linkcamaras);

  const titleCamera = (title) => {
    let titleSlice = title.replace(/(\D)(\d)/, "$1 $2");
    return titleSlice;
  };

  const handleVideoToggle = (videoName) => {
    console.log(videoToShow);
    setName(videoName);
    // Si el video que se presionó es el mismo que ya se estaba mostrando, ocultarlo
    if (videoName === videoToShow) {
      setVideoToShow(null);
    } else {
      // De lo contrario, mostrar el nuevo video
      setVideoToShow(videoName);
      titleCamera(videoName);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2 className={style.title}>TRANSMISIONES</h2>
      </div>
      <div className={style.containerVideos}>
        <div className={style.botonVideos}>
          <>
            <button onClick={() => handleVideoToggle("camara1")}>
               CAMARA 1
            </button>
          </>
          <>
            <button onClick={() => handleVideoToggle("camara2")}>
              CAMARA 2
            </button>
          </>
          <>
            <button onClick={() => handleVideoToggle("camara3")}>
              CAMARA 3
            </button>
          </>
          <>
            <button onClick={() => handleVideoToggle("camara4")}>
             CAMARA 4
            </button>
          </>
          <>
            <button onClick={() => handleVideoToggle("camara5")}>
              CAMARA 5
            </button>
          </>
        </div>
        {videoToShow && (
          <div
            className={`${style.muestraVideo} ${
              videoToShow ? style.videoContainer : ""
            }`}
          >
            {videoToShow && (
              <ReactPlayer
                controls
                url={linkcamaras[videoToShow]}
                className={style.reproductorVideo}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
