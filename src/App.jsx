import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import { mainApi } from './utils/MainApi';
import { CurrentUserContext } from './contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleRegister = (name, password, email) => {
    mainApi
      .register(name, password, email)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log('handleRegister', error);
      });
  };

  return (
   <CurrentUserContext.Provider value={currentUser} >
     <div className={styles.page}>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            loggedIn ? (
              <>
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Profile setLoggedIn={setLoggedIn} />
              </>
            ) : (
              <Navigate to='/signin' replace />
            )
          }
        />
        <Route
          path='/movies'
          element={
            loggedIn ? (
              <>
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Movies />
                <Footer />
              </>
            ) : (
              <Navigate to='/signin' replace />
            )
          }
        />
        <Route
          path='/saved-movies'
          element={
            loggedIn ? (
              <>
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <SavedMovies />
                <Footer />
              </>
            ) : (
              <Navigate to='/signin' replace />
            )
          }
        />
        <Route path='/signin' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path='/signup'
          element={
            <Register onRegister={handleRegister} setLoggedIn={setLoggedIn} />
          }
        />
        <Route path='*' element={<NotFound goBack={goBack} />} />
      </Routes>
    </div>
   </CurrentUserContext.Provider>
  );
}

export default App;
