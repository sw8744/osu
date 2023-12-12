const express = require('express');
require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

const app = express();

app.get('/', (req: any, res: any) => {
    res.status(200).send('OSU! API V1.0');
});

app.get('/getall', (req: any, res: any) => {
    connection.query(
        'SELECT * FROM csat',
        (err: any, results: any, fields: any) => {
            res.status(200).send(results);
        }
    );
});

app.get('/get', (req: any, res: any) => {
    connection.query(
        'SELECT * FROM csat',
        (err: any, results: any, fields: any) => {
            let n = Math.random() * results.length;
            res.status(200).send(results[Math.floor(n)]);
        }
    );
});

app.get('*', (req: any, res: any) => {
    res.status(404).send('404 Not Found');
});

app.listen(5500);