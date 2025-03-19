import React, {useState} from "react";


function App() {
  const [time,setTime] = useState('TIME');

  function getTime(){
    let time = new Date().toLocaleTimeString();
    setTime(time)
    console.log(time);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick= {getTime}>Get Time</button>
    </div>
  );
}

export default App;
