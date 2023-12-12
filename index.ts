const express = require('express');
require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello!');
});

app.get('/get', (req: any, res: any) => {
    connection.query(
        'SELECT * FROM csat',
        (err: any, results: any, fields: any) => {
            res.send(results);
        }
    );
});

app.listen(5500);