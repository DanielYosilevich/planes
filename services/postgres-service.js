var pg = require('pg');
require('dotenv').config()

var dbConn = null;

async function connectToPostgres() {
    // Reuse existing connection if exists
    if (dbConn) return Promise.resolve(dbConn);
    var conString = `postgres://${process.env.DB_CREDENTIALS}`
    var client = new pg.Client(conString);
    try {
        await client.connect()
        try {
            let result = await client.query('SELECT NOW() AS "theTime"')
            dbConn = client;
            console.log('Connected to ElephantSQL at:', result.rows[0].theTime);
        } catch (error) {
            dbConn = null;
            console.error('Error running query', error)
        }
    } catch (error) { console.error('Could not connect to postgres', error) }
    return dbConn
}

module.exports = {
    connect: connectToPostgres
}
