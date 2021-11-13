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
  url:"https://www.youtube.com/watch?v=eegWzglBMh0",
  title:"Abc Alphabet ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channelImage:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=YwlCJEUu_L8",
  title:"Yakaa Dee ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/YwlCJEUu_L8/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/YwlCJEUu_L8/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=N9h2sg-PGRk",
  title:"Curious George  ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/N9h2sg-PGRk/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/N9h2sg-PGRk/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=sLSCpAKV-_4",
  title:"Learn the ABCs: A is for Ant",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/sLSCpAKV-_4/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/sLSCpAKV-_4/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=13mftBvRmvM",
  title:"Do You Like Lasagna ? ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/13mftBvRmvM/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/13mftBvRmvM/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=KGZFmW3uPJE",
  title:"ABC Jack Hartmann",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/KGZFmW3uPJE/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/KGZFmW3uPJE/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=gsb999VSvh8",
  title:"The Letter A Song ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/gsb999VSvh8/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/gsb999VSvh8/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=kzzXROKd-i0",
  title:"The Letter B Song ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/kzzXROKd-i0/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/kzzXROKd-i0/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=gUSJeivdEH8",
  title:"The Letter R Song ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channelImage:"https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=l28AVVT_Yq8",
  title:"Letter Sounds R | Patty Shukla ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/l28AVVT_Yq8/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/l28AVVT_Yq8/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=a97wruxm3go",
  title:"Learn ABC Jack Hartmann ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/a97wruxm3go/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/a97wruxm3go/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=g2jdZ46nK-M",
  title:"Shapes for Dream English Kids ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/g2jdZ46nK-M/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/g2jdZ46nK-M/maxresdefault.jpg",
  channel:"English"
},
{
  url:"https://www.youtube.com/watch?v=tVlcKp3bWH8",
  title:"Hello! | Super Simple Songs ",
  views:"Learn",
  timestamp:"",
  image:"https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg",
  channelImage:"https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg",
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
               {/* { data.map((videos,index )=>(
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
              }*/}
               <RecommendedVideos />
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
