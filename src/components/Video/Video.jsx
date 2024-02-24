import "./Video.scss";
const Video = (props) => {
  const handleClick = () => {
    // activate the card being clicked
    props.changeActiveVideo(props.id);
  };
  return (
    <article className="video" onClick={handleClick}>
      <img className="video__image" src={props.imageSrc} alt="Video cover" />
      <div className="video__content">
        <h2 className="video__text--title">{props.title}</h2>
        <p className="video__text">{props.channel}</p>
      </div>
    </article>
  );
};
export default Video;
