import React, { useEffect, useState } from 'react';
import VideoCard from './../VideoCard/VideoCard';
import './RecommendedVideos.css';
import axios from 'axios';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';


// const RecommendedVideos = ({  url, title, views, timestamp,image, channelImage, channel}) => {
const RecommendedVideos = ({ idMyList, maxItems }) => {
  console.log("recommend", idMyList)
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const idL = 'PLmIQOiA1GP0yffwE7uu2XpxPtEiz-mDjH'
  const YOUTUBE_PLAY_LIST_ITEMS = 'https://www.googleapis.com/youtube/v3/playlistItems'
  const [urlVideo, setUrlVideo] = useState(null)
  const [show, setShow] = useState(false)
  const [widthView, setWidthView] = useState(0)

  const openModal = (res) => {
    const resultIni = res.split("watch?v=");
    const newUrl = resultIni[0] + 'embed/' + resultIni[1];
    setUrlVideo(newUrl.concat(`?autoplay=1&loop=1`))
    setShow(true)
  }
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${idMyList}&maxResults=${maxItems}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then(response => {
        createVideoCards(response.data.items);
        console.log("data.", response)
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
      })
  }, [idMyList, maxItems])

  useEffect(() => {
    setWidthView(window.innerWidth)


  }, [])


  async function createVideoCards(videoItems) {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios
        .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

      const title = snippet.title;
      const image = snippet?.thumbnails?.medium?.url;
      const views = "";// video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;
      const idUrl = snippet.resourceId.videoId;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
        idUrl
      });
    };
    setVideoCards(newVideoCards);
    setIsLoading(false);
  }

  // if(isError) {
  //   return <Alert severity="error" className='loading'>No Results found!</Alert>
  // }
  return (
    <>
      {show && widthView > 540 &&

        <div className=" modal-fixed index " >
          <div >

            <div role="switch" aria-checked={"true"} tabIndex={0} onClick={() => setShow(false)} onKeyPress={() => setShow(false)} className={`grid h-full flex-row justify-center items-center md:mt-24 xs:p-5 xs:mt-28 text-white ${show ? "dg-fadeInFromTop" : "dg-fadeOutFromTop"}`}>
              <div style={{ borderRadius: 15 }} onClick={e => e.stopPropagation()} role="switch" aria-checked={"true"} tabIndex={0} onKeyPress={e => e.stopPropagation()} className="relative bg-x28-black w-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70 text-center grid place-content-center mb-3/4 ">
                <div className="text-white modal-absolute right-0 pt-2 pr-2"><button onClick={() => setShow(false)} ><div className="h-25 w-25">
                  <img src="../cancel.png" className="size-close-modal" alt=""></img>
                </div></button></div>
                <div className="video-90vw h-40vh sm:w-80vw sm:h-70 md:w-60vw md:h-70">
                  <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px" src={`${urlVideo}`} title="YouTube video player" allow="accelerometer; autoplay;" embedsandbox="allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" allowFullScreen ></iframe>                </div>
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
                  <iframe style={{ width: "100%", height: "100%" }} className="rounded-15px" src={`${urlVideo}`} title="YouTube video player" allow="accelerometer; autoplay;" sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-Origin allow-top-navigation" allowFullScreen ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div className='recommendedvideos'>
        {/* {isLoading ? <CircularProgress className='loading' color='secondary' /> : null} */}
        <div className="recommendedvideos__videos">
          {

            // <VideoCard
            //   title={title}
            //   views={views}
            //   timestamp={timestamp}
            //   image={image}
            //   channelImage={channelImage}
            //   channel={channel}
            //   url={url}
            // />
            videoCards.map(item => {
              // console.log("los items",item)
              // const {id, snippet = {} } =item;
              // const { title, thumbnails = {}, resourceId}=snippet;
              // const { medium={} } =thumbnails;
              return (
                <div key={item.videoId} className="pointer">
                  <button onClick={() => openModal(`https://www.youtube.com/watch?v=${item.idUrl}`)} className="block ml-auto">
                    <VideoCard
                      title={item.title}
                      image={item.image}
                      views={item.views}
                      timestamp={item.timestamp}
                      channel={item.channel}
                      channelImage={item.channelImage}
                    // url={`https://www.youtube.com/watch?v=${item.idUrl}`}
                    />
                  </button>
                </div>
              )
            })
            // to={`https://www.youtube.com/watch?v=${item.idUrl}`}
            // )
            // })
          }
        </div>
      </div>
    </>)
}

export default RecommendedVideos;
