import styles from './RatingStars.module.scss';

type RatingStarsProps = {
  rating: string;
};

function RatingStars({ rating }: RatingStarsProps) {
  const stars = ['1', '2', '3', '4', '5'];

  return (
    <div className={styles.rating}>
      {stars.map((star) => (
        <i
          key={star}
          className={`fa-solid fa-star ${star <= rating ? styles.red : styles.grey}`}
        ></i>
      ))}
    </div>
  );
}

export default RatingStars;
