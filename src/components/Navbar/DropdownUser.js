import { NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import Profile from "../../components/pictures/profile.svg";
import Movie from "../../components/pictures/movie.svg";
import Logout from "../../components/pictures/logout.svg";
import Default from "../pictures/Default.svg";

export const DropdownUser = () => {
  const router = useHistory();
  const [, dispatch] = useContext(UserContext);
  const handleLogout = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <div>
      <NavDropdown
        title={
          <div>
            <img className="img-profile" src={Default} alt="navbarPict" />
          </div>
        }
      >
        <li>
          <NavDropdown.Item onClick={() => router.push("/profile")}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={Profile} alt="" />
              <p>Profile</p>
            </div>
          </NavDropdown.Item>
        </li>
        <li>
          <NavDropdown.Item>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={Movie} alt="" />
              <p>My List Film</p>
            </div>
          </NavDropdown.Item>
        </li>
        <li>
          <NavDropdown.Item onClick={handleLogout}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={Logout} alt="" />
              <p>Logout</p>
            </div>
          </NavDropdown.Item>
        </li>
      </NavDropdown>
    </div>
  );
};
