import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Profile from "./components/Profile/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
