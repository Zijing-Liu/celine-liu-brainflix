import "./Video.scss";
const Video = (props) => {
  const handleClick = () => {
    // activate the card being clicked
    props.changeActiveVideo(props.id);
  };
  return (
    <div className="video" onClick={handleClick}>
      <img className="video__image" src={props.imageSrc} alt="Video cover" />
      <div className="video__content">
        <h2 className="video__title">{props.title}</h2>
        <p className="video__channel">{props.channel}</p>
      </div>
    </div>
  );
};
export default Video;
