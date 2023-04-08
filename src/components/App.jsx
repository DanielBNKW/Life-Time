import React, {useState}from "react";



function App() {
  
  setInterval(times, 1000)

  const now = new Date().toLocaleTimeString();

  const [time,setTime] = useState(now);
  
  
  function times(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }


  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={times}>Get Time</button>

    </div>
  );
}

export default App;
