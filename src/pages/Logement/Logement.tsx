import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Listing } from '../../data/Types/Listing';
import Gallery from '../../components/Gallery/Gallery';
import TitleLocation from '../../components/TitleLocation/TitleLocation';
import TagsList from '../../components/TagsList/TagsList';
import HostInfo from '../../components/HostInfo/HostInfo';
import RatingStars from '../../components/RatingStars/RatingStars';
import Collapse from '../../components/Collapse/Collapse';

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState<Listing | null>(null);
  const [error, setError] = useState(false);
  const DATA_URL = 'http://localhost:5173/logements.json';

  async function fetchLogement() {
    try {
      const res = await fetch(DATA_URL);
      const logements = await res.json();

      const logementTrouve = logements.find(function (item: Listing) {
        return item.id === id;
      });

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
    return <p>Erreur lors du chargement des données.</p>;
  }

  return (
    <div>
      {logement && <Gallery pictures={logement.pictures} />}
      {logement && <TitleLocation title={logement.title} location={logement.location} />}
      {logement && <TagsList tags={logement.tags} />}
      {logement && <HostInfo host={logement.host} />}
      {logement && <RatingStars rating={logement.rating} />}
      {logement && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Logement;
