import { NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import Profile from "../../components/pictures/profile.svg";
import Movie from "../../components/pictures/movie.svg";
import Logout from "../../components/pictures/logout.svg";
import Default from "../pictures/Default.svg";
import AddFilmAdmin from "../pictures/AddFilmAdmin.svg";

function DropdownAdmin() {
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
            <img className="img-profile-admin" src={Default} alt="navbarPict" />
          </div>
        }
      >
        <li>
          <NavDropdown.Item onClick={() => router.push("/Add Film")}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={AddFilmAdmin} alt="" />
              <p>Add Film</p>
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
              <p>List Transaction</p>
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
}

export default DropdownAdmin;
