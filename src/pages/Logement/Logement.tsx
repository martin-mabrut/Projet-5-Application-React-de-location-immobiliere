import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Listing } from '../../data/Types/Listing';
import Gallery from '../../components/Gallery/Gallery';
import TitleLocation from '../../components/TitleLocation/TitleLocation';
import TagsList from '../../components/TagsList/TagsList';
import HostInfo from '../../components/HostInfo/HostInfo';
import RatingStars from '../../components/RatingStars/RatingStars';
import Collapse from '../../components/Collapse/Collapse';
import styles from './Logement.module.scss';

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState<Listing | null>(null);
  const [error, setError] = useState(false);
  const DATA_URL = 'http://localhost:5173/logements.json';

  async function fetchLogement() {
    try {
      const res = await fetch(DATA_URL);
      const logements = await res.json();

      const logementTrouve =
        logements.find(function (item: Listing) {
          return item.id === id;
        }) || null;

      setLogement(logementTrouve);
      setError(false);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
      setError(true);
    }
  }

  useEffect(
    function () {
      fetchLogement();
    },
    [id]
  );

  if (error) {
    return <p className={styles.erreur}>Erreur lors du chargement des données.</p>;
  }

  return (
    <div>
      {!logement ? (
        <p className={styles.erreur}>Aucun logement trouvé.</p>
      ) : (
        <>
          <Gallery pictures={logement.pictures} />
          <div className={styles.page}>
            <div className={styles.titleLocation}>
              <TitleLocation title={logement.title} location={logement.location} />
              <TagsList tags={logement.tags} />
            </div>
            <div className={styles.hostRating}>
              <HostInfo host={logement.host} />
              <RatingStars rating={logement.rating} />
            </div>
          </div>
          <div className={styles.collapses}>
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </>
      )}
    </div>
  );
}

export default Logement;
