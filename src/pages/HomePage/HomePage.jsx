import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import { useState, useEffect } from "react";
import videoDetail from "../../data/video-details.json";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [videoList, setVideoList] = useState([]);
  const API_KEY = "d3264812-4975-47da-8eb7-626943222c00";
  // set the default video in play
  //  states to control the updates of activeVideo (video in play)
  const [activeVideo, setActiveVideo] = useState(videoDetail[0]);
  // get the params in url to locate currentVideo (video selected by the user))
  const { videoID } = useParams(); // the whole component will render when it changes
  // find the details of the video that match the videoID param
  // re-render the page when the activeVideo changes

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${API_KEY}`
        );
        setVideoList(response.data);
        if (videoDetail.find((video) => video.id === videoID)) {
          setActiveVideo(videoDetail.find((video) => video.id === videoID));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getVideoList();
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
