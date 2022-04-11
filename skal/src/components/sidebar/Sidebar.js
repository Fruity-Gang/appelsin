import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUser,
  faUserPlus,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const goLogin = async () => {
    navigate("/login");
  };

  const goRegister = async () => {
    navigate("/register");
  };

  const goHome = async () => {
    navigate("/");
  };

  const goProfile = async () => {
    navigate("/profile");
  };

  const goScan = async () => {
    navigate("/profile");
  };

  const logout = async () => {
    setAuth({});
    navigate('/');
}

const { auth, setAuth } = useAuth();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Public Pages</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={goHome}>
              <FontAwesomeIcon className="sidebarIcon" icon={faHome} />
              Home
            </li>
            <li className="sidebarListItem" onClick={goLogin}>
              <FontAwesomeIcon className="sidebarIcon" icon={faSignIn} />
              Login
            </li>
            <li className="sidebarListItem" onClick={goRegister}>
              <FontAwesomeIcon
                className="sidebarIcon"
                icon={faUserPlus}
              />
              Register
            </li>
            <li className="sidebarListItem" onClick={logout}>
              <FontAwesomeIcon
                className="sidebarIcon"
                icon={faSignOut}
              />
              Logout
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Private Pages</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={goScan}>
              <FontAwesomeIcon className="sidebarIcon" icon={faSearch} />
              Scan my Github
            </li>
            <li className="sidebarListItem" onClick={goProfile}>
              <FontAwesomeIcon className="sidebarIcon" icon={faUser} />
              Profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
