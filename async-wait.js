const img = document.querySelector('img');

async function getGif() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=EJfIfdG7ZIsPSd84kIpb0yBsimELyPWP&s=sloth', {mode: 'cors'})
  const dataGif = await response.json();
  img.src = dataGif.data.images.original.url;
};

getGif();