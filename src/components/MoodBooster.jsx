import { useState, useEffect } from 'react';
import styles from './MoodBooster.module.css';

function MoodBooster() {
  const [quote, setQuote] = useState("Click the button to find a quote...");
  const [loading, setLoading] = useState(false); // New state to track if we are waiting

  // The function to fetch data from the internet
  async function fetchQuote() {
    // 1. Start loading (so we can disable the button)
    setLoading(true);

    try {
      // 2. Ask the API for data
      const response = await fetch("https://dummyjson.com/quotes/random");
      
      // 3. Convert the "shipping box" (JSON) into a JavaScript object
      const data = await response.json();

      // 4. Update the state with the new quote
      setQuote(data.quote); 
    } catch (error) {
      setQuote("Oops! Could not find a quote. Try again.");
    } finally {
      // 5. Stop loading (whether it worked or failed)
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch an initial quote when the component mounts
    fetchQuote();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.quote}>
        {/* If loading is true, show "Loading...", else show the quote */}
        {loading ? "Thinking..." : `"${quote}"`}
      </div>
      
      <button 
        onClick={fetchQuote} 
        className={styles.button}
        disabled={loading} // Prevent double-clicking while waiting
      >
        {loading ? "Loading..." : "Get a Boost"}
      </button>
    </div>
  );
}

export default MoodBooster;