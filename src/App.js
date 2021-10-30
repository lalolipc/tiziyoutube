import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [widthView, setWidthView] = useState(0)
  const [showSideBar, setShowSideBar] = useState(false)
const data=[
{
  url:"https://www.youtube.com/embed/eegWzglBMh0",
  title:"Abc Alphabet ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channelImage:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/embed/YwlCJEUu_L8",
  title:"Yakaa Dee ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/YwlCJEUu_L8/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/YwlCJEUu_L8/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/embed/N9h2sg-PGRk",
  title:"Curious George  ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/N9h2sg-PGRk/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/N9h2sg-PGRk/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/embed/yKFakZl643Q",
  title:"Abc Alphabet ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/yKFakZl643Q/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/yKFakZl643Q/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/embed/eegWzglBMh0",
  title:"Abc Alphabet ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channelImage:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/embed/eegWzglBMh0",
  title:"Abc Alphabet ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channelImage:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/embed/eegWzglBMh0",
  title:"Abc Alphabet ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channelImage:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channel:"English"
}

]
useEffect(() => {
  setWidthView(window.innerWidth)

  
}, [])
const openSideBar=()=>{
  setShowSideBar(!showSideBar)
}
return (
    <div className="App">
      <Router>
      <Header
      onClick={()=>openSideBar()} />
        <Switch>
          <Route path='/video/:videoId'>
            <div className="app__mainpage">
              <VideoPlayer />
            </div>
          </Route>
          <Route path='/search/:searchQuery'>
            <div className="app__mainpage">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className="app__mainpage ">
            {widthView > 540 || showSideBar ?
              <SideBar />
              :
              <div></div>
              }
              <div className="app__mainpage  flex-videos">
               { data.map((videos,index )=>(
              <RecommendedVideos
              url={videos.url}
              title={videos.title}
              views={videos.views}
              timestamp={videos.timestamp}
              image={videos.image}
              channelImage={videos.channelImage}
              channel={videos.channel}
              />
               ))
              }
              {/* <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos /> */}
            
              </div>
            </div>
          </Route>
          
        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
