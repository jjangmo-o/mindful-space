import { useState } from 'react';
import styles from './MoodBooster.module.css';

function MoodBooster() {
  const [quote, setQuote] = useState("Remember to breathe.");

  const generateQuote = () => {
    const options = [
      "You are enough.",
      "One day at a time.",
      "Self-care is not selfish.",
      "It is okay to rest."
    ];
    const random = Math.floor(Math.random() * options.length);
    setQuote(options[random]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.quote}>
        "{quote}"
      </div>
      <button onClick={generateQuote} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Get a Boost
      </button>
    </div>
  );
}

export default MoodBooster;