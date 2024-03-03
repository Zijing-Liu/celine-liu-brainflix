import Video from "../Video/Video";
import "./VideoList.scss";
import { Link } from "react-router-dom";
function VideoList(props) {
  return (
    <section className="video-list">
      <p className="video-list__heading">NEXT VIDEOS</p>

      {props.videoList.map((video) => {
        if (video.id !== props.activeVideoID) {
          return (
            <Link path={`/${video.id}`}>
              <Video
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                imageSrc={video.image}
                activeVideoID={props.activeVideoID}
                changeActiveVideo={props.changeActiveVideo}
              />
            </Link>
          );
        }
        return null;
      })}
    </section>
  );
}
export default VideoList;
