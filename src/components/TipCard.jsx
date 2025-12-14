import styles from './TipCard.module.css';

function TipCard(props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}

export default TipCard;