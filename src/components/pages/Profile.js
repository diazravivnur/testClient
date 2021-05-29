import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../contexts/userContext";
import Default from "../pictures/Default.svg";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [state, dispatch] = useContext(UserContext);
  const loadProfile = async (id) => {
    try {
      const response = await API.get(`/users/` + id);
      setProfile(response.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div className="container-profile">
      <div className="profile">
        <h1>My Profile</h1>
        <div className="profile-detail">
          <div className="profile-img">
            <img src={Default} alt="#" />
          </div>

          <div className="profile-content">
            <h6>Full Name</h6>
            <div>
              <p>{state.user.fullName}</p>
            </div>
            <h6>Email</h6>

            <p>{state.user.email}</p>

            <h6>Phone</h6>

            <p>083896833122</p>
            {/* <h3>My Films</h3>
            films goes here */}
          </div>
        </div>
        <Link to={`/updateprofile/${state.user.id}`}>
          <button className="hero-link">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
