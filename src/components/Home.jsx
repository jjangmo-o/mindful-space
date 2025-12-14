import MoodBooster from './MoodBooster';
import TipCard from './TipCard';

function Home() {
  const healthTips = [
    { id: 1, title: "Stay Hydrated", desc: "Drinking water helps your brain function." },
    { id: 2, title: "Disconnect", desc: "Take a break from social media for 30 minutes." },
    { id: 3, title: "Move Your Body", desc: "A short walk can improve your mood." }
  ];

  return (
    <div>
      <MoodBooster />
      <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid #eee" }}/>
      <div>
        <h2>Quick Tips</h2>
        {healthTips.map((tip) => (
          <TipCard key={tip.id} title={tip.title} description={tip.desc} />
        ))}
      </div>
    </div>
  );
}

export default Home;