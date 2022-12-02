import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import ButtonHeaderLeft from "../components/button/homepage/ButtonHeaderLeft";
import ButtonHeaderRight from "../components/button/homepage/ButtonHeaderRight";
import ButtonPresentation from "../components/button/presentationpage/ButtonPresentation";

function WebcamSample() {

    const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);
    
    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: "user"
    }

    const startCam = () => {
        setIsShowVideo(true);
    }

    const stopCam = () => {
        let stream = videoElement.current.stream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsShowVideo(false);
    }

    return (
        <><header className="App-header">
            <div className="Header_left">
                <ButtonHeaderLeft name="Mon Espace" />
                <ButtonHeaderLeft name="Offre" />;
                <ButtonHeaderLeft name="Candidature" />;
            </div>
            <div className="Header_right">
                <ButtonHeaderRight name="Se Connecter" />;
            </div>
        </header><div>
            <div className='Baniere'>
                <div className='baniere_gauche_video'>
                    <p>  Il vous suffit de repondre en video à notre question</p>
                    <div className="bouton">
                        <ButtonPresentation type="button" name="Quels est votre plus grande fierté"/>;
                    </div> 
                </div>
                <div className='baniere_droite'>
                    <div className="camView">
                        {isShowVideo &&
                            <Webcam audio={false} ref={videoElement} videoConstraints={videoConstraints} />}
                    </div>
                    <button className='Start_video' onClick={startCam}>Start Video</button>
                    <button className='Stop_video' onClick={stopCam}>Stop Video</button>
                </div>
                </div>
            </div></>
    );
};

export default WebcamSample;