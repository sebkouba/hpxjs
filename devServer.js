var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var compiler = webpack(config);

var mongodb = require('mongodb');
var db;

// create webpack instance from config and dev middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/** Fake Comment API */
var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});

app.get("/data/entries", (req, res) => {
  db.collection("entries").find({}).toArray((err, entries) => {
    if (err) throw err;

    res.json(entries)
  });
});

app.post('/data/entries',function(req,res){
  var e_id = Date.now();
  var author = req.body.author;
  var text = req.body.text;

  db.collection("entries").insert({
    id: e_id,
    author: author,
    text: text
  });
});

app.post('/data2/entries',function(req,res){
  var e_id = Date.now();
  var title = req.body.title;
  var comment = req.body.comment;

  db.collection("entries").insert({
    id: e_id,
    title: title,
    comment: comment
  });
});
mongodb.MongoClient.connect(process.env.MONGO2, function(err, database){
  if (err) throw err;

  db = database;

  app.listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3000');
  });
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//app.listen(3000, 'localhost', function(err) {
//  if (err) {
//    console.log(err);
//    return;
//  }
//
//  console.log('Listening at http://localhost:3000');
//});
