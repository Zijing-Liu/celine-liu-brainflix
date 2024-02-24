import Video from "../Video/Video";
function VideoList(props) {
  return (
    <div className="video-list">
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
    </div>
  );
}
export default VideoList;
