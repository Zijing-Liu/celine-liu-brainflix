import Video from "../Video/Video";
import "./VideoList.scss";
function VideoList(props) {
  return (
    <section className="video-list">
      <p className="video-list__heading">NEXT VIDEOS</p>
      {props.videoList.map((video) => {
        if (video.id !== props.activeVideoID) {
          console.log("video.id:", video.id);
          console.log("props.activeVideo:", props.activeVideo);

          return (
            <Video
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              imageSrc={video.image}
              activeVideoID={props.activeVideoID}
              changeActiveVideo={props.changeActiveVideo}
            />
          );
        }
        return null;
      })}
    </section>
  );
}
export default VideoList;
