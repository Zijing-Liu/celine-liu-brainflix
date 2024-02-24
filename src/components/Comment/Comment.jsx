import "./Comment.scss";
function Comment(props) {
  return (
    <article className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__text">
        <div className="comment__heading">
          {" "}
          <p className="comment__author">{props.author} </p>
          <p className="comment__date">
            {new Date(props.timestamp).toLocaleDateString("en-US")}
          </p>
        </div>

        <p className="comment__content">{props.content}</p>
      </div>
    </article>
  );
}
export default Comment;
