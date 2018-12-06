const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/crosscountry';

const client = new Client(databaseUrl);

client.connect();
 
client.query(`
    SELECT * FROM racers;
`)
  .then(results => {
    console.log(results.rows);
  })
  .catch(err => {
    console.log(err);
  });