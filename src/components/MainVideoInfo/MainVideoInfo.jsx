import viewsIcon from "../../assets/images/views.svg";
import likeIcon from "../../assets/images/likes.svg";
import "./MainVidoeInfo.scss";
function MainVidoeInfo(props) {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{props.activeVideo.title}</h1>
      <div className="video-info__facts">
        <div className="video-info__facts-column">
          <p className="video-info__text--primary">
            {props.activeVideo.channel}
          </p>
          <p className="video-info__text--secondary">
            {new Date(props.activeVideo.timestamp).toLocaleDateString("en-US")}
          </p>
        </div>
        <div className="video-info__facts-column">
          <p className="video-info__text--secondary">
            <img className="video-info__icon" src={viewsIcon} alt="" />

            {props.activeVideo.views}
          </p>
          <p className="video-info__text--secondary">
            <img className="video-info__icon" src={likeIcon} alt="" />
            {props.activeVideo.likes}
          </p>
        </div>
      </div>
      <p className="video-info__text">{props.activeVideo.description}</p>
    </div>
  );
}
export default MainVidoeInfo;
