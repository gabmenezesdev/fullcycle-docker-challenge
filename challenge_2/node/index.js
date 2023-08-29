const express = require('express');
const mysql = require('mysql');

const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Fullcycle')`

app.get('/', (req, res)=>{
    connection.query(sql)
    connection.end()
    return res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen('3000', ()=>{
    console.log('Servidor iniciado com sucesso!')
})