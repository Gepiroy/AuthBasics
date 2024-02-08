const mysql = require("mysql2");

var hostName = "localhost" //TODO find out how to move this to settings correctly in node.
var userName = "root"
var userPass = ""
var dbName = "auth_basics"

var globalConnection = mysql.createConnection({
    host: hostName,
    user: userName,
    password: userPass,
})

globalConnection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);

var pool = mysql.createPool({ //Better for API-projects than connection. It's a pool of connections.
    connectionLimit: 5,
    host: hostName,
    user: userName,
    password: userPass,
    database: dbName,
})

pool.query(`CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT
    login VARCHAR(20) NOT NULL UNIQUE,
    passHash VARCHAR(30) NOT NULL
)`);//Maybe it's better to use login as primary key for loginning purposes, but the users is also used in many places including another tables.

console.log("Do I understand right, the whole script will be launched only one time?");

export default pool;