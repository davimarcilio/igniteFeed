import styles from "./Header.module.css";
import Logo from "../assets/ignite-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      {/* <h1>Ignite Feed</h1> */}
    </header>
  );
}
