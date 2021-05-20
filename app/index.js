const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query('CREATE TABLE IF NOT EXISTS people(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50))')
    connection.query(`INSERT INTO people(name)
                      values ('Wesley')`)
    connection.query(`INSERT INTO people(name)
                      values ('Leonardo')`)
    connection.query('SELECT * from people;', function (error, results, fields) {
        if (error) throw error;
        res.send('<h1>Full Cycle</h1>' + results.map(result => result.name).join('<br>'))
    });
    connection.end()
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

