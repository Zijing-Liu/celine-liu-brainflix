import Comment from "../Comment/Comment";
import "./CommentList.scss";
function CommentList(props) {
  return (
    <div className="comment-list">
      {props.comments.map((item) => {
        return (
          <Comment
            key={item.id}
            id={item.id}
            author={item.name}
            content={item.comment}
            timestamp={item.timestamp}
            likes={item.likes}
          />
        );
      })}
    </div>
  );
}
export default CommentList;
