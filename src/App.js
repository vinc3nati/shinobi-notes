import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/mock" element={<Mockman />} />
    </Routes>
  );
}

export default App;
