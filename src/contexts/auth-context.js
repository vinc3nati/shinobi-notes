import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../services/user.service";

const key = "SHINOBI_NOTES_APP";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key)) || {});
  let navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await loginUser({ email, password });
      if (encodedToken) {
        localStorage.setItem(
          key,
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setUser({ user: foundUser, token: encodedToken });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async ({ name, email, password }) => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await signupUser({ name, email, password });
      if (encodedToken) {
        localStorage.setItem(
          key,
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setUser({ user: createdUser, token: encodedToken });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem(key);
    setUser({});
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleSignUp, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!AuthContext) throw new Error("Auth Context was not created");

  return context;
};

export { useAuth, AuthProvider };
