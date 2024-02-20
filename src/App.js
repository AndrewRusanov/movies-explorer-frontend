import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.page}>
        <Header loggedIn={loggedIn} />
      </div>
    </div>
  );
}

export default App;
