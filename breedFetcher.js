const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (body === "[]") {
      return callback(`${breedName} breed not found.`);
    }

    if (error) {
      return callback(error);
    }

    const data = JSON.parse(body);

    if (response) {
      callback(error, data[0].description);
    }

  });

};

module.exports = { fetchBreedDescription };