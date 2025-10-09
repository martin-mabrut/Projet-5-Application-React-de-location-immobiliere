import logo from '../../assets/LOGO-White.svg';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Kasa" className={styles.logo} />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
