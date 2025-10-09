import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoContainer}>
        <img src={logo} alt="Kasa" className={styles.logo} />
      </NavLink>

      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
