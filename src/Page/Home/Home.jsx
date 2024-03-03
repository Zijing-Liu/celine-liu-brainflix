import React from "react";
import Header from "../../components/Header/Header";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import { useState } from "react";
import videos from "../../data/videos.json";
import videoDetail from "../../data/video-details.json";

function Home() {
  const [videoList, setVideoList] = useState(videos);
  const [activeVideo, setActiveVideo] = useState(videoDetail[0]);

  // function to change the activeVideo id with the video that users clicks on
  const changeActiveVideo = (videoId) => {
    // find the video that user clicks on
    const toActiveVideo = videoDetail.filter((item) => item.id === videoId)[0];
    setActiveVideo(toActiveVideo);
  };

  return (
    <div className="Home">
      <Header />
      <MainVideo activeVideo={activeVideo} />
      <section className="main-content">
        <MainVideoInfo activeVideo={activeVideo} />
        <VideoList
          videoList={videoList}
          activeVideoID={activeVideo.id}
          changeActiveVideo={changeActiveVideo}
        />
      </section>
    </div>
  );
}

export default Home;
