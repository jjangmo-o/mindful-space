import { useState } from 'react';
import MoodBooster from './MoodBooster';
import TipCard from './TipCard';
import TipForm from './TipForm';

function Home() {
  const [tips, setTips] = useState([
    { id: 1, title: "Stay Hydrated", desc: "Drinking water helps your brain function." },
    { id: 2, title: "Disconnect", desc: "Take a break from social media for 30 minutes." },
    { id: 3, title: "Move Your Body", desc: "A short walk can improve your mood." }
  ]);

  function addNewTip(text) {
    const newTip = {
      id: Date.now(),
      title: "User Tip",
      desc: text
    };
    setTips([...tips, newTip]);
  }

  function deleteTip(idToDelete) {
    setTips(tips.filter((tip) => tip.id !== idToDelete));
  }

  return (
    <div>
      <MoodBooster />
      <hr style={{ margin: "20px 0", border: "none", borderTop: "1px solid #eee" }}/>
      
      {/* Replaced the messy input code with this one clean line */}
      <TipForm onAddTip={addNewTip} />
      
      <div>
        <h2>Quick Tips</h2>
        {tips.map((tip) => (
          <TipCard 
            key={tip.id} 
            id={tip.id} 
            title={tip.title} 
            description={tip.desc} 
            onDelete={deleteTip} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;