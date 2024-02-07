const mysql = require("mysql2");

var pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "",
    database: "auth_basics",
})

export default pool;