import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import Logo from "../../components/pictures/logo.svg";

import FormModal from "../Modal/Modal";
import Login from "../Modal/Login";
import Register from "../Modal/Register";

import { DropdownUser } from "./DropdownUser";
import DropdownAdmin from "./DropdownAdmin";

const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const router = useHistory();
  const handleShowRegister = () => {
    setShowRegister(true);
  };
  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const toggleToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const toggleToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <>
      <FormModal show={showLogin} handleClose={handleCloseLogin}>
        <Login toggle={toggleToRegister} handleClose={handleCloseLogin} />
      </FormModal>
      <FormModal show={showRegister} handleClose={handleCloseRegister}>
        <Register toggle={toggleToLogin} handleClose={handleCloseLogin} />
      </FormModal>

      <nav className="navbar1">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="#" />
          </Link>
        </div>
        <div className="nav-link1">
          {state.login ? (
            // <DropdownAdmin></DropdownAdmin>
            <DropdownUser></DropdownUser>
          ) : (
            <ul className="navbar-ul">
              <label onClick={handleShowLogin} className="link-login">
                Login
              </label>
              <label onClick={handleShowRegister} className="link-register">
                Register
              </label>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
