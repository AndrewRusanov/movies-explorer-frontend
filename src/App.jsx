import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import { mainApi } from './utils/MainApi';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import { mapErrorsToMessage } from './utils/constants';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    handleTokenCheck();
  }, [pathname]);

  const handleLogin = async (email, password) => {
    try {
      const result = await mainApi.signin(email, password);
      if (result.token) {
        localStorage.setItem('jwt', result.token);
        await handleGetUserInfo();
        navigate('/movies', { replace: true });
        setErrorText('');
        return true;
      }
    } catch (error) {
      setErrorText(mapErrorsToMessage[error]);
      return false;
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const result = await mainApi.register(name, email, password);
      if (result) {
        handleLogin(email, password);
        return true;
      }
    } catch (error) {
      setErrorText(mapErrorsToMessage[error]);
      return false;
    }
  };

  const handleSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    navigate('/', { replace: true });
  };

  const handleTokenCheck = async () => {
    setErrorText('');
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            handleGetUserInfo();
            (pathname === '/signup' || pathname === '/signin') &&
              navigate('/movies', { replace: true });
          }
        })
        .catch((error) => console.log(`Ошибка проверки токена - ${error}`));
    }
  };

  const handleGetUserInfo = async () => {
    const token = localStorage.getItem('jwt');
    try {
      const userData = await mainApi.getUserInfo(token);
      if (userData) {
        await setCurrentUser(userData);
        setLoggedIn(true);
        return true;
      }
    } catch (error) {
      console.log(`Ошибка получения данных о пользователе - ${error}`);
      return false;
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                  <Profile
                    setCurrentUser={setCurrentUser}
                    onSignOut={handleSignOut}
                  />
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
                  <Movies />
                  <Footer />
                </>
              ) : (
                <Navigate to='/signin' replace />
              )
            }
          />
          <Route
            path='/signin'
            element={<Login onLogin={handleLogin} errorText={errorText} />}
          />
          <Route
            path='/signup'
            element={
              <Register onRegister={handleRegister} errorText={errorText} />
            }
          />
          <Route path='*' element={<NotFound goBack={goBack} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
