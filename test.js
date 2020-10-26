require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

//Testing API
app.get('/', (req, res) => {
  axios.get(`https://api.discogs.com/database/search?q=Nirvana&key=${process.env.disKey}&secret=${process.env.disSecret}`).then(function (apiResponse) {
    let discogs = apiResponse.data.results;
    console.log(discogs);
  })
});


app.listen(3000)