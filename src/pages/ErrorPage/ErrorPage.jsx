import React from "react";
import { useNavigate } from "react-router-dom";
import GIF from "../../assets/warning.gif";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section id="error-page">
      <div className="error-container">
        <div className="error-symbol-container">
          <div className="error-symbol"></div>
        </div>
        <div className="error-content">
          <div className="error-heading">
            <p>Error</p>
            <p>404</p>
          </div>
          <div className="error-text">Page not found</div>
          <div className="error-button-grp">
            <button
              className="btn outline-warning"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button className="btn warning" onClick={() => navigate("/notes")}>
              Notes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
