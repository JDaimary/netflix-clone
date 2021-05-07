import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import "../css/Profile.css";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Plans from "./Plans";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
                <h3>Plans</h3>
                <Plans />
              <button
                className="profile-signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
