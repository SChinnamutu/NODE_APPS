# NODE_APPS

Steps:

git clone https://github.com/SChinnamutu/NODE_APPS/new/node_mysql_rest_service

Go to db.js file and configure your db credentials.

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'test',
    password : 'Admin@123',
    database : 'nodedb'
});

npm install

npm start
