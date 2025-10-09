import Banner from '../../components/Banner/Banner';
import styles from './About.module.scss';
import bannerImg from '../../assets/Image-Banner-A-propos.jpg';

function About() {
  return (
    <div className={styles.page}>
      <Banner src={bannerImg} alt="Paysage nature" />
    </div>
  );
}

export default About;
