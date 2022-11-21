const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  if (body === "[]") {
    return console.log(`${breed} breed not found.`);
  }

  if (error) {
    return console.log(error);
  }

  const data = JSON.parse(body);

  if (response) {
    console.log(data[0].description);
  }

});