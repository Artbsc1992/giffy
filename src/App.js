import React, { useState } from 'react';
import './App.css';

function App() {
  const [gifs, updateGifs] = useState(['https://media0.giphy.com/media/nQsjN6yCqXwBoELeSi/giphy.gif?cid=ecf05e47qjz3v33auy4tv9bdnc4em6xv5t0if0qilv9dflh7&rid=giphy.gif&ct=g']);


  return (
    <div className="App">
      <section className="App-content">
         <img src={gifs} />
      </section>
    </div>
  );
}

export default App;
