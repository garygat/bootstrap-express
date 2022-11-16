//#DEC
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
const port = process.env.PORT || 3001;
const methodOverride = require(`method-override`);
const title = 'Express JS | ';
const { v4: uuid } = require(`uuid`);
uuid();

// console.log(redditData);

//#DUNDIR PATH
app.use(express.static(path.join(__dirname, 'public')));
app.set(`views`, path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'images')));
app.set;

//#EJS
app.set('view engine', 'ejs');

// #COMMENTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride(`_method`));
let comments = [
  {
    id: uuid(),
    username: 'Ramin Djawadi',
    comment: '"dun dun dundundun dun dununun"',
  },
  {
    id: uuid(),
    username: 'Hannibal',
    comment: 'I love to eat children for breakfast',
  },
  {
    id: uuid(),
    username: 'Bebang',
    comment: 'wakokohahaha grr grr',
  },
  {
    id: uuid(),
    username: 'Mark',
    comment: 'Saging lang ang may puso!!!',
  },
];

//#GET REQUESTS, RESPONSE
// =HOME
app.get('/', (req, res) => {
  const name = 'Home';
  res.render('home', { name, title });
});
// =CATS
app.get('/cats', (req, res) => {
  const name = 'Cats';
  const cats = [
    'Vhagar',
    'Melys',
    'Caraxes',
    'Arrax',
    'Sunfyre',
    'Meraxes',
    'Dreamfyre',
    'Seasmoke',
    'Syrax',
    'Vermax',
    'Vermithor',
  ];
  res.render('cats', { cats, name, title });
});
// =PAIN
app.get('/tae', (req, res) => {
  const name = 'Awit';
  const tae = 'PHP7200 ';
  res.render('tae', { tae: tae, name, title });
});
// =SUBREDDIT PATH VARIABLE
app.get('/r/:subreddit', (req, res) => {
  const random2 = Math.floor(Math.random() * 30) + 1;
  const { subreddit } = req.params;
  console.log('browsing ', req.params);
  const data = redditData[subreddit];
  if (data) {
    res.render('subreddit', { ...data, random2, title });
  } else {
    const name = 'Not Found';
    res.render('notfound', { subreddit, title, name });
  }
});
// =RANDOM
app.get(`/random`, (req, res) => {
  const name = 'Random';
  const random = Math.floor(Math.random() * 10) + 1;
  const h1Label = `Your random number is: `;
  res.render('random', { h1Rand: h1Label, rand: random, name, title });
  // console.log('browsing ', req.params);
});

//  =KA
app.get(`/ka`, (req, res) => {
  const name = 'Kapitan';
  res.render('ka', { name, title });
});

// =COMMENT
app.get(`/comments`, (req, res) => {
  const name = 'Comments';
  res.render(`comments/index`, { name, title, comments });
});

// -COMMENT NEW
// ?GET
app.get(`/comments/new`, (req, res) => {
  const name = 'New Comment';
  console.log(req.body);
  res.render(`comments/new`, { name, title });
});
// ?POST
app.post(`/comments`, (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  console.log(req.body);
  res.redirect(`/comments`);
});

app.get(`/comments/:id`, (req, res) => {
  const name = 'Show';
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render(`comments/show`, { name, title, id, comment });
});

// -PATCH
app.get(`/comments/:id/edit`, (req, res) => {
  const name = 'Edit';
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render(`comments/edit`, { title, name, comment });
});

app.patch(`/comments/:id`, (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect(`/comments`);
});
// -DELETE
app.delete(`/comments/:id`, (req, res) => {
  // const name = `Delete`;
  const { id } = req.params;
  // const foundComment = comments.find((c) => c.id === id);
  comments = comments.filter((c) => c.id !== id);
  res.redirect(`/comments`);
});
// =404 CATCH
app.get('*/:req1', (req, res) => {
  const name = 'NOT FOUND';
  const { req1 } = req.params;
  console.log(req1);
  res.render('error404', { req: req1, name, title });
});

//#LISTENER
app.listen(port, () => {
  console.log(`bootstrap-express app listening on port ${port}!`);
});

// const express = require(`express`);
// const app = express();
// const path = require('path');

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.get(`/`, (req, res) => {
//   res.render(`home`);
// });

// app.get('/rand', (req, res) => {
//   const h1 = `Your random number is: `;
//   const num = Math.floor(Math.random() * 20) + 1;
//   res.render('random', { rand: num, h1Rand: h1 });
// });
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });
