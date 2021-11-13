import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [widthView, setWidthView] = useState(0)
  const [showSideBar, setShowSideBar] = useState(false)
  const data = [
    {
      url: "https://www.youtube.com/watch?v=eegWzglBMh0",
      title: "Abc Alphabet ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
      channelImage: "https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=YwlCJEUu_L8",
      title: "Yakaa Dee ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/YwlCJEUu_L8/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/YwlCJEUu_L8/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=N9h2sg-PGRk",
      title: "Curious George  ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/N9h2sg-PGRk/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/N9h2sg-PGRk/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=sLSCpAKV-_4",
      title: "Learn the ABCs: A is for Ant",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/sLSCpAKV-_4/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/sLSCpAKV-_4/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=13mftBvRmvM",
      title: "Do You Like Lasagna ? ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/13mftBvRmvM/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/13mftBvRmvM/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=KGZFmW3uPJE",
      title: "ABC Jack Hartmann",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/KGZFmW3uPJE/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/KGZFmW3uPJE/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=gsb999VSvh8",
      title: "The Letter A Song ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/gsb999VSvh8/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/gsb999VSvh8/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=kzzXROKd-i0",
      title: "The Letter B Song ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/kzzXROKd-i0/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/kzzXROKd-i0/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=gUSJeivdEH8",
      title: "The Letter R Song ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
      channelImage: "https://i.ytimg.com/vi/eegWzglBMh0/sddefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=l28AVVT_Yq8",
      title: "Letter Sounds R | Patty Shukla ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/l28AVVT_Yq8/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/l28AVVT_Yq8/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=a97wruxm3go",
      title: "Learn ABC Jack Hartmann ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/a97wruxm3go/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/a97wruxm3go/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=g2jdZ46nK-M",
      title: "Shapes for Dream English Kids ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/g2jdZ46nK-M/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/g2jdZ46nK-M/maxresdefault.jpg",
      channel: "English"
    },
    {
      url: "https://www.youtube.com/watch?v=tVlcKp3bWH8",
      title: "Hello! | Super Simple Songs ",
      views: "Learn",
      timestamp: "",
      image: "https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg",
      channel: "English"
    }

  ]
  const [idList, setIdList] = useState('1');

  useEffect(() => {
    setWidthView(window.innerWidth)
    // setIdList(idList)

  }, [])
  const openSideBar = () => {
    setShowSideBar(!showSideBar)
  }
  console.log("idList", idList)
  // PLmIQOiA1GP0yffwE7uu2XpxPtEiz-mDjH

  return (
    <div className="App">
      <Router>
        <Header
          onClick={() => openSideBar()} />
        <Switch>
          <Route path='/video/:videoId'>
            <div className="app__mainpage">
              <VideoPlayer />
            </div>
          </Route>
          <Route path='/search/:searchQuery'>
            <div className="app__mainpage">
              <SideBar setIdList={setIdList} />
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className="app__mainpage ">
              {widthView > 540 || showSideBar ?
                <SideBar setIdList={setIdList} />
                :
                <div></div>
              }
              <div className="app__mainpage  flex-videos">
                {idList === '1' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0yffwE7uu2XpxPtEiz-mDjH'} maxItems={20} />
                }
                {idList === '2' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0ykrOO2s0StHv82V8axUP04'} maxItems={20} />
                }
                {idList === '3' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0zDC7cJRa4DD6UOsLVNHQqC'} maxItems={10} />
                }
                {idList === '4' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0z11eO76Mfe-bwedSQlI5lK'} maxItems={20} />
                }
                {idList === '5' &&
                  <RecommendedVideos idMyList={'PLmIQOiA1GP0znpsfk4vQmDUGJyAMjnTLL'} maxItems={10} />
                }

              </div>
            </div>
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
