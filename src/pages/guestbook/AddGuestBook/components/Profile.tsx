import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      Profile Page
      <Link to="/add-guestbook/photo">다음</Link>
    </div>
  );
};

export default Profile;
