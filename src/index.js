
// import express from 'express';
// import { engine } from 'express-handlebars';

const path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const { dirname } = require('path');
const { create } = require('domain');
const app = express();

const port = 3000;



app.use(express.static(path.join(__dirname, 'public')));

// // HTTP logger
app.use(morgan('combined'));

// // Template engine
// app.engine('hbs', handlebars({
//   extname: '.hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources/views'));

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.set('view engine', 'HTML');
//app.use(handlebars.ExpressHandlebars);

app.get('/', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  console.log(req.query.q);
  res.render('search');
})

app.get('/', (req, res) => {
  return res.send(`
    <h1 style="color:red">Hello World!</h1>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// nodemon để debug nhanh hơn
//template engine: code html đẹp hơn
// npm install express-handlebars