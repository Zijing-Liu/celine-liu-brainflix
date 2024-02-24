import "./MainVideo.scss";
function MainVideo(props) {
  return (
    <section className="main-video">
      <div className="video-player">
        <video
          className="video-player__video"
          controls
          poster={props.activeVideo.image}
        >
          <source src={props.activeVideo.video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
export default MainVideo;
