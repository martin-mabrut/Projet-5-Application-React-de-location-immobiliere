import { NavLink } from 'react-router-dom';
import styles from './Error.module.scss';

function Error() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Error;
