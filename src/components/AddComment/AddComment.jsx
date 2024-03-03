import "./AddComment.scss";
import addCommentIcon from "../../assets/images/add_comment.svg";
function AddComment(props) {
  return (
    <div className="add-comment">
      <div className="add-comment__content">
        <form className="add-comment__form" action="POST">
          <div className="add-comment__avatar--filled"></div>
          <div className="add-comment__input">
            <label
              className="add-comment__input-label"
              htmlFor="user-add-comment"
            >
              JOIN THE CONVERSATION
            </label>
            <div className="add-comment__input-container">
              <input
                className="add-comment__input-field"
                type="text"
                name=""
                id="user-add-comment"
                placeholder="Add a new add-comment"
              />

              <button className="add-comment__button">
                <img
                  className="add-comment__button-icon"
                  src={addCommentIcon}
                  alt="upload button"
                ></img>
                <span className="add-comment__button-text">COMMENT</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddComment;
