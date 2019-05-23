'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = 3000;

app.use(express.json());
app.use(express.static('../public'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/alltitle', (req, res) => {
  conn.query(`SELECT book_name FROM book_mast;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.json(rows);
  });
});

app.get('/fulldata', (req, res) => {
  conn.query(`SELECT book_name AS 'Title of book', author.aut_name AS 'Name of Author', category.cate_descrip AS 'Category', newpublisher.pub_name AS 'Publisher name', book_price AS 'Price' FROM book_mast
  INNER JOIN author ON author.aut_id=book_mast.aut_id
  INNER JOIN category ON category.cate_id=book_mast.cate_id
  INNER JOIN newpublisher ON newpublisher.pub_id=book_mast.pub_id
  ORDER BY book_mast.book_id ASC;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});