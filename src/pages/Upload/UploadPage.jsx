import React, { useRef } from "react";
import "./UploadPage.scss";
import uploadImagePreive from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UploadPage() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const titleRef = useRef("");
  const desRef = useRef("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      description: desRef.current.value,
    };
    try {
      const response = await axios.post(`${baseUrl}/videos`, formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
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
                ref={titleRef}
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
                ref={desRef}
              />
            </span>
          </div>
        </div>
        <div className="upload__buttons">
          <button
            className="upload__publish-button"
            type="submit"
            onSubmit={handleSubmit}
          >
            <img
              src={uploadIcon}
              alt="upload icon"
              className="upload__button-icon"
            ></img>
            <span className="upload__button-text">PUBLISH</span>
          </button>

          <button
            className="upload__cancel-button"
            type="submit"
            onClick={() => navigate("/videos")}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
