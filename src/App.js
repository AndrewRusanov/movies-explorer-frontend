import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <div className={styles.page}>
        <Header loggedIn={loggedIn} />
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;
