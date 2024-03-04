import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoList from "../../components/VideoList/VideoList";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
function HomePage() {
  const API_KEY = "d3264812-4975-47da-8eb7-626943222c00";
  const [videoList, setVideoList] = useState([]);
  // states to control the updates of activeVideo (video in play)
  const [activeVideo, setActiveVideo] = useState({});
  const [loaded, setLoaded] = useState(false);
  // Get videos from api
  const getVideoList = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${API_KEY}`
      );
      const videos = response.data;
      // get the default video to display on page
      if (videos.length > 0) {
        const firstVideoId = videos[0].id;
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${firstVideoId}?api_key=${API_KEY}`
        );
        setActiveVideo(response.data);
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
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoID}?api_key=${API_KEY}`
      );
      setActiveVideo(response.data);
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
