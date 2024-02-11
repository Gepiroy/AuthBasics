import mysql from "mysql2"
import config from "../configs/configDB.js"

const GlobalConnection = function(){
    //It's like a constructor in normal java. Nothing here for now.
}

const _globalConnection = mysql.createConnection({
    host: config.hostName,
    user: config.userName,
    password: config.userPass,
})

GlobalConnection.tryCreateDatabase = function(){
    _globalConnection.query(`CREATE DATABASE IF NOT EXISTS ${config.dbName}`);
}

GlobalConnection.close = async function(){
    _globalConnection.end(function(err){
        if(err) console.log("error on closing global connecton: "+err.message)
    })
}

export default GlobalConnection;