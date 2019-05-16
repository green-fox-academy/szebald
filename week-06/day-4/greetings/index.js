const express = require('express');
const app = express();
const PORT = 6969;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  let name = req.query.name;
  let age = req.query.age;
  if (!name){
    name = 'Guest';
    age = 'Idunno';
  }
  res.render('home',{
  title: `Welcome back ${name + ' , you are ' + age}  years old!`,
  });
});


// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});