import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";

function HomePage() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [videoList, setVideoList] = useState([]);
  // states to control the updates of activeVideo (video in play)
  const [activeVideo, setActiveVideo] = useState({});
  const [loaded, setLoaded] = useState(false);
  // Get videos from api
  const getVideoList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/videos`);
      const videos = response.data.data;
      // get the default video to display on page
      setActiveVideo(videos);
      if (videos.length > 0) {
        const firstVideoId = videos[0].id;
        const response = await axios.get(`${baseUrl}/videos/${firstVideoId}`);
        console.log("returning the first video detial", response.data);
        setActiveVideo(response.data.data);
      }
      // update states
      setVideoList(videos);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  // get the params in url to locate currentVideo (video selected by the user))
  const { videoID } = useParams();
  // Fetch details of the activeVideo when videoID changes
  const findActiveVideo = async () => {
    try {
      const response = await axios.get(`${baseUrl}/videos/${videoID}`);
      console.log("returning the current active video detail", response);
      setActiveVideo(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideoList();
  }, []); // Fetch videos from api only once when the component mounts

  useEffect(() => {
    findActiveVideo();
  }, [videoID]); // Fetch the active video when the videoID param changes

  if (!loaded) {
    return <div></div>;
  } else {
    return (
      <div className="homepage">
        <MainVideo activeVideo={activeVideo} />
        <section className="main-content">
          <MainVideoInfo activeVideo={activeVideo} />
          <VideoList videoList={videoList} activeVideoID={activeVideo.id} />
        </section>
      </div>
    );
  }
}

export default HomePage;
