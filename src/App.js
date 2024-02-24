import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import MainVideoInfo from "./components/MainVideoInfo/MainVideoInfo";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
import videos from "./data/videos.json";
import videoDetail from "./data/video-details.json";
import "./App.scss";

function App() {
  const [videoList, setVideoList] = useState(videos);
  const [activeVideo, setActiveVideo] = useState(videoDetail[0]);

  // function to change the activeVideo id with the video that users clicks on
  const changeActiveVideo = (videoId) => {
    // find the video that user clicks on
    const toActiveVideo = videoDetail.filter((item) => item.id === videoId)[0];
    setActiveVideo(toActiveVideo);
  };

  return (
    <div className="App">
      <Header />
      <MainVideo activeVideo={activeVideo} />
      <main className="main-content">
        <MainVideoInfo activeVideo={activeVideo} />
        <VideoList
          videoList={videoList}
          activeVideoID={activeVideo.id}
          changeActiveVideo={changeActiveVideo}
        />
      </main>
    </div>
  );
}

export default App;
