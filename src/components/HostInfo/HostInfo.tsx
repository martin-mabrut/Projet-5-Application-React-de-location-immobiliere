import styles from './HostInfo.module.scss';

type Host = {
  name: string;
  picture: string;
};

type HostInfoProps = {
  host: Host;
};

function HostInfo({ host }: HostInfoProps) {
  return (
    <div className={styles.host}>
      <p className={styles.name}>{host.name}</p>
      <img src={host.picture} alt={host.name} className={styles.picture} />
    </div>
  );
}

export default HostInfo;
