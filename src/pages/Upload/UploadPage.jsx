import React from "react";
import "./UploadPage.scss";
import uploadImagePreive from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
function UploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <h2 className="upload__subheading">VIDEO THUMBNAIL</h2>
      <img
        className="upload__thumbnail"
        src={uploadImagePreive}
        alt="video thumbnail"
      />
      <form className="upload__form" action="">
        <label className="upload__subheading" htmlFor="title">
          TITLE YOUR VIDEO
        </label>

        <input
          className="upload__input"
          type="text"
          name="title"
          placeholder="Add a title to your video"
        />

        <label
          className="upload__subheading"
          htmlFor="description"
          placeholder="Add a title to your video"
        >
          ADD A VIDEO DESCRIPTION
        </label>

        <input
          className="upload__input--description"
          type="text"
          name="description"
          placeholder="Add a description to your video"
        />
        <div className="upload__buttons">
          <button className="upload__publish-button" type="submit">
            <img
              src={uploadIcon}
              alt="upload icon"
              className="upload__button-icon"
            ></img>
            <span className="upload__button-text">PUBLISH</span>
          </button>

          <button className="upload__cancel-button" type="submit">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
