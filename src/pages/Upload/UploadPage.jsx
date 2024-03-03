import React from "react";
import "./UploadPage.scss";
import uploadImagePreive from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
function UploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <form className="upload__form" action="">
        <div className="upload__form-content">
          <div className="upload__thumbnail-component">
            <label className="upload__subheading">VIDEO THUMBNAIL</label>

            <img
              className="upload__thumbnail"
              src={uploadImagePreive}
              alt="video thumbnail"
            />
          </div>
          <div className="upload__input-component">
            <label className="upload__subheading" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <span>
              <input
                className="upload__input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
            </span>

            <label
              className="upload__subheading"
              htmlFor="description"
              placeholder="Add a title to your video"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <span>
              <input
                className="upload__input--description"
                type="text"
                name="description"
                placeholder="Add a description to your video"
              />
            </span>
          </div>
        </div>
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
