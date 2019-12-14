const mysql = require('mysql');

const mc = mysql.createConnection({
   host: "localhost",
   user: 'test',
   password: 'Admin@123',
   database: 'nodedb'
});

// var mc = mysql.createConnection('mysql://root:Messi@0934@127.0.0.1:3306/nodedb?debug=true');
 
// connect to database
mc.connect();

module.exports = mc; 