/*
 *Hacer un request de tipo GET al endpoint https://api.imgflip.com/get_memes, usando Fetch API.
 */
fetch('https://api.imgflip.com/get_memes', {
  method: 'GET'
}).then(response => {
  response.status === 200
    ? console.log('Successful request!')
    : console.error(`Oops, we get an error ${response.status}`);
  return response;
});

function memesData(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}
let memesArray = [];

function filterBySize(meme) {
  return meme.height >= 500 || meme.width >= 500;
}

function filterMemes(memesArray) {
  const filteredMemes = memesArray.filter(filterBySize);
  return filteredMemes;
}

function sortById(firstMeme, nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

function sortMemes(memesArray) {
  return memesArray.sort(sortById);
}
