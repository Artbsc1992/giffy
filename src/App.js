import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=AZXFi0gvCDPNwoB1RpGg81kZckh53G4P&q=the+office&limit=25&offset=0&rating=g&lang=en';
  const [gifs, setGifs] = useState([]);

 useEffect(() => {
  fetch(apiURL)
  .then(res => res.json())
  .then(response => {
    const { data } = response;
    const gifs = data.map(img => img.images.downsized_medium.url)
    setGifs(gifs)
  })
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
