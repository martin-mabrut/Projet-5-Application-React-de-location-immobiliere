import styles from './TagsList.module.scss';

type TagsListProps = {
  tags: string[];
};

function TagsList({ tags }: TagsListProps) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag, index) => (
        <li key={index} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagsList;
