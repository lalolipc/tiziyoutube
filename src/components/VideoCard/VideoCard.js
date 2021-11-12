import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

const VideoCard = ({ image, title, channel, views, timestamp, channelImage, url }) => {
  const [urlVideo, setUrlVideo] = useState(null)
  const [show, setShow] = useState(false)
  const [widthView, setWidthView] = useState(0)
  const resultIni= url.split("watch?v=")
  const res=resultIni[0]+'embed/'+resultIni[1]
  const openModal = (res) => {
    
    setUrlVideo(res)
    setShow(true)
  }
  useEffect(() => {
    setWidthView(window.innerWidth)
  
    
  }, [])

  return (
    <>

      {show && widthView > 540 &&

        <div className=" modal-fixed index" >
          <div open={show}>
            
            <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white ${show ? "dg-fadeInFromTop" : "dg-fadeOutFromTop"}`}>
              <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
                  <img src="../cancel.png" className="size-close-modal" alt=""></img>
                  </div></button></div>
                <div className="video-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70">
                <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px" src={urlVideo} title="YouTube video player"  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" allowFullScreen ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
            {show && widthView < 540 &&

<div className=" modal-fixed-mobile index" >
  <div open={show}>
    
    <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white ${show ? "dg-fadeInFromTop" : "dg-fadeOutFromTop"}`}>
      <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
        <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
        <img src="../cancel.png" className="size-close-modal" alt=""></img>

          </div></button></div>
        <div className="video-90vw-mobile h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70">
        <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px" src={urlVideo} title="YouTube video player"  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" allowFullScreen ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
}
      <div className='videocard'>
        <button onClick={() => openModal(res)} className="block ml-auto">

          <img className='videocard__image' src={image} alt='' />
        </button>
        <div className="videocard__info">
          {/* <Avatar
            className='videocard__avatar'
            alt={channel}
            src={channelImage}
          /> */}
          <div className="videocard__text ">
            <h4>{title}</h4>
            <p  className="text-green-500">{channel}</p>
            <p>{views} • {timestamp}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard;
