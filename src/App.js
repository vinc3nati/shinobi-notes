import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import { Label } from "./pages/Label/Label";
import { ScrollTop } from "./components/ScrollTop/ScrollTop";
import { Trash } from "./pages/Trash/Trash";
import { EditModal } from "./components/EditModal/EditModal";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import "./App.css";

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
        <Route path="/" element={<Home title="home" />} />
        <Route path="/login" element={<Auth title="login" />} />
        <Route path="/signup" element={<Auth title="signup" />} />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="notes" element={<Notes title="notes" />} />
          <Route path="note/:noteId" element={<EditModal />} />
          <Route path="archives" element={<Archives title="archives" />} />
          {tags.map((tag) => (
            <Route key={tag} path={`/${tag}`} element={<Label tag={tag} />} />
          ))}
          <Route path="trash" element={<Trash title="trash" />} />
        </Route>

        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollTop />
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;
