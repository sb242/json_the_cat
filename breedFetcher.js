const request = require('request');
const args = process.argv.slice(2);
const breed = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;

request(breed, (error, response, body) => {
  if (error) {
    console.log('Error');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});