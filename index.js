"use strict";
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send('OSU! API V1.0');
});
app.get('/getall', (req, res) => {
    connection.query('SELECT * FROM csat', (err, results, fields) => {
        res.status(200).send(results);
    });
});
app.get('/get', (req, res) => {
    connection.query('SELECT * FROM csat', (err, results, fields) => {
        let n = Math.random() * results.length;
        res.status(200).send(results[Math.floor(n)]);
    });
});
app.get('*', (req, res) => {
    res.status(404).send('404 Not Found');
});
app.listen(5500);
