import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Login } from "../../components/Auth/Login";
import { Signup } from "../../components/Auth/Signup";
import { useAuth } from "../../contexts/auth-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Auth = ({ title }) => {
  useDocumentTitle(title);
  const { user, handleLogin, handleSignUp } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user.token]);

  return (
    <section id="auth">
      <div className="auth-container">
        <aside className="auth-aside">
          <div className="auth-image-container">
            <img
              className="img img-responsive"
              src="https://res.cloudinary.com/randomwave45/image/upload/v1648214717/notes_auth_e1mc51.png"
              alt="Auth image"
            />
          </div>
          <div className="auth-phrase">
            <span className="phrase">Take notes like never before.</span>
          </div>
        </aside>
        <main className="auth-main">
          {pathname === "/login" && <Login handleLogin={handleLogin} />}
          {pathname === "/signup" && <Signup handleSignUp={handleSignUp} />}
        </main>
      </div>
    </section>
  );
};
