'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'test',
    password : 'Admin@123',
    database : 'nodedb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;