const mysql = require("mysql2");
const settings = require("../configs/configDB.js");

const GlobalConnection = function(){
    //It's like a constructor in normal java. Nothing here for now.
}

const _globalConnection = mysql.createConnection({
    host: settings.hostName,
    user: settings.userName,
    password: settings.userPass,
})

GlobalConnection.tryCreateDatabase = function(){
    _globalConnection.query(`CREATE DATABASE IF NOT EXISTS ${settings.dbName}`);
}

GlobalConnection.close = async function(){
    _globalConnection.end(function(err){
        if(err) console.log("error on closing global connecton: "+err.message)
    })
}

export default GlobalConnection;