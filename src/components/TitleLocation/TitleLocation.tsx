import styles from './TitleLocation.module.scss';

type TitleLocationProps = {
  title: string;
  location: string;
};

function TitleLocation({ title, location }: TitleLocationProps) {
  return (
    <div className={styles.titleLocation}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.location}>{location}</p>
    </div>
  );
}

export default TitleLocation;
