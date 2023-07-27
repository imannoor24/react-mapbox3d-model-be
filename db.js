const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "enter_your_username",
    host: "localhost", //enter your host name here
    database:"enter_yourdb_name",
    password: "enter_your_password",
    port:5432, //or any other port incase 
});


module.exports = pool;

