import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
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
              <SideBar />
              <div className="app__mainpage  flex-videos">
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
              <RecommendedVideos />
              <RecommendedVideos />
              <RecommendedVideos />
              </div>
            </div>
          </Route>
          
        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
