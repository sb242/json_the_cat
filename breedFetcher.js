const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if(body === '[]') {
        callback(null, 'invalid cat breed')
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };