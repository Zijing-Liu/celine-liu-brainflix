import Video from "../Video/Video";
import "./VideoList.scss";
import { Link, useParams } from "react-router-dom";

function VideoList(props) {
  return (
    <section className="video-list">
      <p className="video-list__heading">NEXT VIDEOS</p>
      {props.videoList.map((video) => {
        if (props.activeVideoID !== video.id) {
          return (
            <Link to={`/video/${video.id}`} key={video.id}>
              <Video
                id={video.id}
                title={video.title}
                channel={video.channel}
                imageSrc={video.image}
                activeVideoID={props.activeVideoID}
              />
            </Link>
          );
        }
      })}
    </section>
  );
}
export default VideoList;
