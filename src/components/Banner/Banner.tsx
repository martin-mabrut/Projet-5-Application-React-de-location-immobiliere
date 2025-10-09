import styles from './Banner.module.scss';

type BannerProps = {
  title?: string;
  src: string;
  alt?: string;
};

function Banner({ title, src, alt = '' }: BannerProps) {
  return (
    <section className={styles.banner} aria-label={title}>
      <img className={styles.bg} src={src} alt={alt} />
      <div className={styles.overlay} />
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}

export default Banner;
