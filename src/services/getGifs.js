const apiKey = 'AZXFi0gvCDPNwoB1RpGg81kZckh53G4P'

const getGifs = async (keyword = 'the office')=> {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
  .then(res => res.json())
  .then(response =>{
    const {data = []} = response;
    if(Array.isArray(data)){
      const gifs = data.map(image => image.images.downsized_medium.url);
      return gifs;
    }
  })
}

export default getGifs;