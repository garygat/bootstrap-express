const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
// console.log(redditData);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.set;

app.set('view engine', 'ejs');
app.set(`views`, path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/cats', (req, res) => {
  const cats = ['Vhagar', 'Melys', 'Caraxes', 'Arrax', 'Sunfyre', 'Meraxes', 'Vermithor'];
  res.render('cats', { cats });
});
app.get('/tae', (req, res) => {
  const tae = '7200 ';
  res.render('tae', { tae: tae });
});
app.get('/r/:subreddit', (req, res) => {
  const random2 = Math.floor(Math.random() * 30) + 1;
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render('subreddit', { ...data, random2 });
  } else {
    res.render('notfound', { subreddit });
  }
});

app.get(`/random`, (req, res) => {
  const random = Math.floor(Math.random() * 10) + 1;
  const h1Label = `Your random number is: `;
  res.render('random', { h1Rand: h1Label, rand: random });
});

app.listen(3000, () => {
  console.log(`LISTENING ON PORT 3000`);
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
