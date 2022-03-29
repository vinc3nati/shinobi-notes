import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Auth } from "./pages/Auth/Auth";
import { useData } from "./contexts/data-context";
import { Loader } from "./components/Loader/Loader";
import { Notes } from "./pages/Notes/Notes";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Archives } from "./pages/Archives/Archives";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Layout } from "./components/Layout/Layout";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  const { loader } = useData();
  return (
    <>
      {loader && <Loader />}
      <Routes>
        <Route exact path="/" element={<Home title="home" />} />
        <Route exact path="/login" element={<Auth title="login" />} />
        <Route exact path="/signup" element={<Auth title="signup" />} />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="notes" element={<Notes title="notes" />} />
          <Route path="archives" element={<Archives title="archives" />} />
        </Route>

        <Route exact path="/mock" element={<Mockman />} />
      </Routes>
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;
