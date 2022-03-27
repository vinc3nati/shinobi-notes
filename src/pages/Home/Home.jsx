import React from "react";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Home = ({ title }) => {
  useDocumentTitle(title);
  let navigate = useNavigate();
  return (
    <section id="home">
      <main className="main-content">
        <header className="title-container">
          <div className="main-heading">Shinobi Notes</div>
          <div className="sub-heading">Take your notes in a Shinobi way.</div>
        </header>
        <div className="btn-grp">
          <a href="https://github.com/vinc3nati/shinobi-notes" target="_blank">
            <button className="btn outline-warning">contribute</button>
          </a>
          <button className="btn warning" onClick={() => navigate("/notes")}>
            Get Started
          </button>
        </div>
      </main>
      <aside className="aside-content">
        <div className="img-container">
          <img
            className="img img-responsive"
            src="https://res.cloudinary.com/randomwave45/image/upload/v1648206551/notes-ninja_kz4935.png"
            alt="notes ninja"
          />
        </div>
      </aside>
    </section>
  );
};
