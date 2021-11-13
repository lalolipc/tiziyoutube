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
      const image = snippet.thumbnails.medium.url;
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
                <VideoCard
                  title={item.title}
                  image={item.image}
                  views={item.views}
                  timestamp={item.timestamp}
                  channel={item.channel}
                  channelImage={item.channelImage}
                  //  url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} 
                  url={`https://www.youtube.com/watch?v=${item.idUrl}`}
                />
              </div>
            )
          })
          // to={`https://www.youtube.com/watch?v=${item.idUrl}`}
          // )
          // })
        }
      </div>
    </div>
  )
}

export default RecommendedVideos;
