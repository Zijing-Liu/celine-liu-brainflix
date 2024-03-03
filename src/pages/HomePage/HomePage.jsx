import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import { useState, useEffect } from "react";
import videos from "../../data/videos.json";
import videoDetail from "../../data/video-details.json";
import { useParams } from "react-router-dom";

function HomePage() {
  const [videoList, setVideoList] = useState(videos);
  // set the default video in play
  //  states to control the updates of activeVideo (video in play)
  const [activeVideo, setActiveVideo] = useState(videoDetail[0]);
  // get the params in url to locate currentVideo (video selected by the user))
  const { videoID } = useParams(); // the whole component will render when it changes
  console.log(videoID);
  // find the details of the video that match the videoID param
  // only updates the activeVideo state when the param is a valid video id

  // re-render the page when the activeVideo changes
  useEffect(() => {
    if (videoDetail.find((video) => video.id === videoID)) {
      setActiveVideo(videoDetail.find((video) => video.id === videoID));
    }
  }, [videoID]);

  return (
    <div className="Home">
      <MainVideo activeVideo={activeVideo} />
      <section className="main-content">
        <MainVideoInfo activeVideo={activeVideo} />
        <VideoList videoList={videoList} activeVideoID={activeVideo.id} />
      </section>
    </div>
  );
}

export default HomePage;
