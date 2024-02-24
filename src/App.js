import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
import videos from "./data/videos.json";
import videoDetail from "./data/video-details.json";
import "./App.scss";
import viewsIcon from "./assets/images/views.svg";
import likeIcon from "./assets/images/likes.svg";

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
      <section className="main-video">
        <div className="video-player">
          <video
            className="video-player__video"
            controls
            poster={activeVideo.image}
          >
            <source src={activeVideo.video} type="video/mp4" />
          </video>
        </div>
        <div className="video-info">
          <h1 className="video-info__title">{activeVideo.title}</h1>
          <div className="video-info__facts">
            <div className="video-info__column">
              <p className="video-info__text--primary">{activeVideo.channel}</p>
              <p className="video-info__text--secondary">
                {new Date(activeVideo.timestamp).toLocaleDateString("en-US")}
              </p>
            </div>
            <div className="video-info__column">
              <p className="video-info__text--secondary">
                <span className="icon">
                  <img src={viewsIcon} alt="" />
                </span>{" "}
                {activeVideo.views}
              </p>
              <p className="video-info__text--secondary">
                <span className="icon">
                  <img src={likeIcon} alt="" />
                </span>
                {activeVideo.likes}
              </p>
            </div>
          </div>
          <p className="video-info__text">{activeVideo.description}</p>
        </div>
      </section>

      <VideoList
        videoList={videoList}
        activeVideoID={activeVideo.id}
        changeActiveVideo={changeActiveVideo}
      />
    </div>
  );
}

export default App;
