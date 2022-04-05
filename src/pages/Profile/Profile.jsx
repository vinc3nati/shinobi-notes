import React from "react";
import { useAuth } from "../../contexts";
import UserImage from "../../assets/images/dummy.jpg";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { convertToProperDate } from "../../utils/localDate";

export const Profile = ({ title }) => {
  useDocumentTitle(title);
  const {
    user: { user },
    handleLogOut,
  } = useAuth();
  return (
    <section id="profile">
      <div className="user-img-container">
        <img className="img img-round" src={UserImage} alt="user-profile" />
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <span className="profile-title">Name :</span>
          <span className="profile-value">{user.name}</span>
        </div>
        <div className="profile-section">
          <span className="profile-title">Email :</span>
          <span className="profile-value">{user.email}</span>
        </div>
        <div className="profile-section">
          <span className="profile-title">Joined At :</span>
          <span className="profile-value">
            {convertToProperDate(user.createdAt)}
          </span>
        </div>
        <button className="btn outline-warning" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </section>
  );
};
