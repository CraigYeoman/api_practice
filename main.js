const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=EJfIfdG7ZIsPSd84kIpb0yBsimELyPWP&s=sloth', {mode: 'cors'})
  .then(function(response){
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });