const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database:"pakstats",
    password: "iman2404",
    port:5432,
});


module.exports = pool;

