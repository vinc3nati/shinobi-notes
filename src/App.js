import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
