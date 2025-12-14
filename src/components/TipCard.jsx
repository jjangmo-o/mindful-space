import styles from './TipCard.module.css';

function TipCard(props) {
  return (
    <div className={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h3 className={styles.title}>{props.title}</h3>

        <button
            onClick={() => props.onDelete(props.id)}
            style={{ background: "transparent", border: "none", color: "red", cursor: "pointer", fontSize: "1.2rem" }}
        >   
            &times;
        </button>
    </div>

      <p className={styles.description}>{props.description}</p>
    </div>
  );
}

export default TipCard;