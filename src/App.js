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
import { Layout } from "./components/Layout/Layout";
import "./App.css";
import { Label } from "./pages/Label/Label";
import { ScrollTop } from "./components/ScrollTop/ScrollTop";

function App() {
  const { pathname } = useLocation();
  const {
    loader,
    state: { tags },
  } = useData();
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
          {tags.map((tag) => (
            <Route key={tag} path={`/${tag}`} element={<Label tag={tag} />} />
          ))}
        </Route>

        <Route exact path="/mock" element={<Mockman />} />
      </Routes>
      <ScrollTop />
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;
