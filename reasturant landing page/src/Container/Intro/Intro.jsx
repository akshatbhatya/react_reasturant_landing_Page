import React, { useRef, useState } from 'react'

import "./Intro.css"
import { Meal } from '../../assets/index'
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";


const Intro = () => {
  const VideoRef = useRef();
  const [playvideo, setPlayVideo] = useState(true)
  const videoHandler = () => {
    setPlayVideo((prev) => !prev)
    if (playvideo) {
      VideoRef.current.pause()

    }
    else {
      VideoRef.current.play()
    }
  }

  console.log(playvideo);
  return (
    <div className='parent'>
      <div className='app__into-container'>

        <div className="app__into-video">

          <video
            src={Meal}
            ref={VideoRef}
            autoPlay={true}
            controls={false}
            allowFullScreen
            muted
            loop
            width={"100%"} />
          <div className="app__intro--videobtn flex__center ">
            {
              playvideo ? <><FaRegCirclePause onClick={videoHandler} size={50} /></> : <><FaRegPlayCircle onClick={videoHandler} size={50} /></>
            }

          </div>
        </div>

      </div>

    </div>

  )
}

export default Intro
