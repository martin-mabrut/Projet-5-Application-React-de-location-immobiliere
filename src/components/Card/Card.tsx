import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

type Props = {
  id: string;
  title: string;
  cover: string;
};

function Card({ id, title, cover }: Props) {
  return (
    <Link to={`/logement/${id}`} className={styles.card} aria-label={title}>
      <img className={styles.img} src={cover} alt={title} />
      <div className={styles.fade} />
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
}

export default Card;
