const Pool = require("pg").Pool;

const pool = new Pool({
    user: "abijithmani",
    password: "joeybats19",
    host: "localhost",
    port: 5432,
    database: "film_room"
});

module.exports = pool;