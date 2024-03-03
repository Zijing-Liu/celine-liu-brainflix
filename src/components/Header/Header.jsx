import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/search.svg";
import uploadIcon from "../../assets/images/upload.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="navbar">
        <div className="navbar__search">
          <div className="navbar__search-box">
            <img className="navbar__search-icon" src={searchIcon} alt="" />
            <input
              className="navbar__search-input"
              type=" text"
              placeholder="Search"
            />
          </div>
          <img
            className="navbar__avatar--mobile"
            src={avatar}
            alt="avatar Mohan Muruge"
          />
        </div>

        <button className="navbar__button" onClick={() => navigate("./upload")}>
          <span className="navbar__button-icon">
            <img src={uploadIcon} alt="" />
          </span>
          <span className="navbar__button-text">UPLOAD</span>
        </button>
        <img
          className="navbar__avatar--tablet"
          src={avatar}
          alt="avatar Mohan Muruge"
        />
      </div>
    </header>
  );
}
export default Navbar;
