import styles from './Home.module.scss';
import Banner from '../../components/Banner/Banner';
import bannerImg from '../../assets/Image-Banner-Accueil.jpg';
import CardsGrid from '../../components/CardsGrid/CardsGrid';

function Home() {
  return (
    <div className={styles.page}>
      <Banner title="Chez vous, partout et ailleurs" src={bannerImg} alt="Paysage nature" />
      <CardsGrid />
    </div>
  );
}

export default Home;
