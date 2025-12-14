import { useState } from 'react';

function TipForm(props) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (text.trim() === "") return; // Don't allow empty spaces
    
    props.onAddTip(text); // Send data up to Parent
    setText(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      marginBottom: "20px", 
      display: "flex", 
      gap: "10px", 
      justifyContent: "center" 
    }}>
      <input 
        type="text" 
        placeholder="Share a mental health tip..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ 
          padding: "12px", 
          width: "70%", 
          borderRadius: "8px", 
          border: "1px solid #ccc",
          fontSize: "1rem"
        }}
      />
      <button 
        type="submit"
        style={{ 
          padding: "12px 24px", 
          background: "#00bcd4", 
          color: "white", 
          border: "none", 
          borderRadius: "8px", 
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TipForm;