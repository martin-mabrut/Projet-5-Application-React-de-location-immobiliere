import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardsGrid.module.scss';
import type { Listing } from '../../data/Types/Listing';

const DATA_URL = 'http://localhost:5173/logements.json';

function CardsGrid() {
  const [listeLogements, setListeLogements] = useState<Listing[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(DATA_URL);
        const liste = await res.json();
        setListeLogements(liste);
      } catch {
        setErrorMessage('Une erreur est survenue, réessayez ultérieurement');
      }
    })();
  }, []);

  if (errorMessage) return <p>{errorMessage}</p>;
  if (!listeLogements.length) return <p>Chargement…</p>;

  return (
    <section className={styles.logements}>
      <div className={styles.grid}>
        {listeLogements.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </section>
  );
}

export default CardsGrid;
