import viewsIcon from "../../assets/images/views.svg";
import likeIcon from "../../assets/images/likes.svg";
import "./MainVidoeInfo.scss";
import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";
function MainVidoeInfo(props) {
  return (
    <section className="video-info">
      <div>
        <h1 className="video-info__title">{props.activeVideo.title}</h1>
        <div className="video-info__facts">
          <div className="video-info__facts-column">
            <p className="video-info__text--primary">
              {props.activeVideo.channel}
            </p>
            <p className="video-info__text--secondary">
              {new Date(props.activeVideo.timestamp).toLocaleDateString(
                "en-US"
              )}
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
        <p className="video-info__text--primary">
          {props.activeVideo.comments.length} Comments
        </p>
      </div>

      <AddComment />
      <CommentList comments={props.activeVideo.comments} />
    </section>
  );
}
export default MainVidoeInfo;
