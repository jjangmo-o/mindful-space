import './App.css'; 
import Header from './components/Header.jsx';
import MoodBooster from './components/MoodBooster.jsx';
import TipCard from './components/TipCard.jsx';

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