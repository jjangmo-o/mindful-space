import { useState } from 'react';
import './App.css'; 

// --- Child Components ---

function Header() {
  return (
    <header style={{ backgroundColor: "#e0f7fa", padding: "20px", textAlign: "center", color: "#333" }}>
      <h1>MindfulSpace 🌿</h1>
      <p>Mental Health Awareness & Resources</p>
    </header>
  );
}

function TipCard(props) {
  return (
    <div style={{ borderLeft: "4px solid #00bcd4", margin: "10px 0", padding: "10px", backgroundColor: "#fff", color: "#333" }}>
      <h3 style={{ margin: "0 0 5px 0" }}>{props.title}</h3>
      <p style={{ margin: 0 }}>{props.description}</p>
    </div>
  );
}

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
    <div style={{ textAlign: "center", margin: "20px 0", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <div style={{ fontSize: "1.2rem", marginBottom: "10px", fontStyle: "italic" }}>
        "{quote}"
      </div>
      <button onClick={generateQuote} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Get a Boost
      </button>
    </div>
  );
}

// --- Main App Component ---

function App() {
  const healthTips = [
    { id: 1, title: "Stay Hydrated", desc: "Drinking water helps your brain function." },
    { id: 2, title: "Disconnect", desc: "Take a break from social media for 30 minutes." },
    { id: 3, title: "Move Your Body", desc: "A short walk can improve your mood." }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Header />
      <MoodBooster />
      <hr style={{ margin: "20px 0" }}/>
      <div>
        <h2>Quick Tips</h2>
        {healthTips.map((tip) => (
          <TipCard key={tip.id} title={tip.title} description={tip.desc} />
        ))}
      </div>
    </div>
  );
}

export default App;