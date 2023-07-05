import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import { logOut } from "../../../services/auth";
import PrimaryDialog from "../../primary-dialog/PrimaryDialog";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import defaultAvt from "../../../assets/default-avt.png";
import { Link } from "react-router-dom";
import "./style.scss";

const LogoutButton = () => {
  return (
    <>
      <button 
        className="btn-logout btn--dark flex-container items--center"
        style={{
          padding: "5px 7px",
          borderRadius: "5px"
        }}
      >
        <LogoutRoundedIcon />
        <span>Log out</span>
      </button>
    </>
  );
};

export default function Sidebar() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.photoURL);
  return (
    <>
      <div id="sidebar">
        <div className="sidebar__menu flex-container bg--dark wrp-padding shadow--bold">
          <div className="menu">
            <Link to={"/"} className="menu__logo flex-container text--white">
              <HomeRoundedIcon className="home__icon" />
              <h1>
                TChat<span>&#127826;</span>
              </h1>
            </Link>
            <div className="menu__user flex-container border--primary ">
              <img
                className="avatar border--around"
                src={currentUser.photoURL || defaultAvt}
                alt="Avatar"
                width={55}
              />
              <h4 className="name text--white">
                {currentUser.displayName || "User name"}
              </h4>
            </div>
            <ul className="menu__list">
              <li className="item">
                <Link to={"/chat-rooms/"} className="text--white">
                  Chat rooms
                </Link>
              </li>
              <li className="item">
                <Link to={"/music-room/"} className="text--white">
                  Music room
                </Link>
              </li>
            </ul>
          </div>

          <div className="action">
            <PrimaryDialog
              openBtn={<LogoutButton />}
              content={
                <h3 className="text--error">
                  Bạn có chắc chắn muốn đăng xuất?
                </h3>
              }
              dialogFunc={logOut}
            />
          </div>
        </div>
      </div>
    </>
  );
}
