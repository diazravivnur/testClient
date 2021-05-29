import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../contexts/userContext";
import Default from "../pictures/Default.svg";

const UpdateProfile = () => {
  const History = useHistory();
  const { id } = useParams();
  return (
    <div>
      <p>Update Profile Disini</p>
    </div>
  );
};

export default UpdateProfile;
