//MVC - Model part with database creation and holding.
const mysql = require("mysql2");
const settings = require("../configs/configDB.js");

const db = mysql.createPool({ //Better for API-projects than connection. It's a pool of connections.
    connectionLimit: 5,
    host: settings.hostName,
    user: settings.userName,
    password: settings.userPass,
    database: settings.dbName,
})

db.tryCreateTables = function(){
    db.query(`CREATE TABLE IF NOT EXISTS users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        login VARCHAR(20) NOT NULL UNIQUE,
        pass_hash VARCHAR(30) NOT NULL
    )`);//Maybe it's better to use login as primary key for loginning purposes, but the users is also used in many places including another tables.
    db.query(`CREATE TABLE IF NOT EXISTS users_data(
        id INT PRIMARY KEY AUTO_INCREMENT,
        secret_data VARCHAR(50)
    )`);// Some test data which user can access only when logged in. It also should be able to change.
}

console.log("Do I understand right, the whole script will be launched only one time?");

export default db;