import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.page}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <Profile setLoggedIn={setLoggedIn} />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound goBack={goBack} />} />
      </Routes>
    </div>
  );
}

export default App;
