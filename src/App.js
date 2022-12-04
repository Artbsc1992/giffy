import React, { useState, useEffect } from 'react';
import getGifs from './services/getGifs';
import './App.css';

function App() {
  
  const [gifs, setGifs] = useState([]);

 useEffect(() => {
  getGifs().then(gifs => setGifs(gifs))
  // setGifs(GIFS_2)

 }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif =>
            <img src={singleGif} />
          )
        }
        {/* <button className='btn' onClick={() => setGifs(GIFS_2)}>Change Gifs</button> */}
      </section>
    </div>
  );
}

export default App;
