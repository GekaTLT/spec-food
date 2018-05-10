const express = require('express');
const fallback = require('express-history-api-fallback');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const recipeSchema = require('./server/schema.js');
const unique = require('./server/unique');

mongoose.connect('mongodb://localhost/cooking');

const db = mongoose.connection;

const app = express();

const port = 3000;
const root = `${__dirname}/dist`;


db.on('error', console.error.bind(console, 'connection error:'));


app.use(bodyParser.json());

app.use(express.static(root));

app.use(fallback('index.html', { root }));

app.post('/loadLinkCategory', function (req, res) {
  const collection = req.body.collection;
  const Header = mongoose.model('Recipe', recipeSchema, collection);

  Header.find(function (err, result) {
    let arr = [];

    for (let ele of result) {
      arr.push(ele.view);
    }
    let view = unique(arr);
    res.json(view);
  });

});

app.post('/loadRecipes' , function (req, res) {
    const collection = req.body.collection;
    const category = req.body.category;

    const loadCategory = mongoose.model('Recipe',recipeSchema ,collection);

    loadCategory.find({view: category},function (err, result) {
        res.json(result);
    });

});

app.post('/loadRandomRecipes', function (req, res) {
  const collection = req.body.collection;
  const Home = mongoose.model('Recipe', recipeSchema, collection);

  Home.aggregate(
    [ { $sample: { size: 8 } } ]
  ).then(data => res.json(data))
});




app.listen(port , function () {
    console.log(`server run ${port}`);
});




