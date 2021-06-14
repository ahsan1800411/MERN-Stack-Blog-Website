import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

import { Context } from "../../context/Context";

const Topbar = () => {
  const PF = "http://localhost:4000/images/";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topBarLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-twitter-square"></i>
        <i className=" topIcon fab fa-pinterest-square"></i>
        <i className=" topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topBarCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            <Link className="link" to="/">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topBarRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
