import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Auth } from "./pages/Auth/Auth";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home title="home" />} />
        <Route exact path="/login" element={<Auth title="login" />} />
        <Route exact path="/signup" element={<Auth title="signup" />} />
        <Route exact path="/mock" element={<Mockman />} />
      </Routes>
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;
