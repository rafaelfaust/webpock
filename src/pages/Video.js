import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import './video.css'

function Video() {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function hanndleStart (){
 
        if(play){
            videoRef.current.pause();
            setPlay(false);

        }  else {
            videoRef.current.play();
            setPlay(true);
        }  
    }

  return (
    <div className='video'>
        <video 
            className='video_player'
            ref={videoRef}
            onClick={hanndleStart}
            loop
            src='https://static.videezy.com/system/resources/previews/000/018/948/original/ICON-VERSION8_1.mp4'
        >
        </video>
        <VideoFooter/>
    </div>
  )
}

export default Video