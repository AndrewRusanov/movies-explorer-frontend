import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.page}>
        <Header />
      </div>
    </div>
  );
}

export default App;
