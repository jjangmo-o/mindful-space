import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.name}>
      <h1>MindfulSpace 🌿</h1>
      <p>Mental Health Awareness & Resources</p>
    </header>
  );
}

export default Header;