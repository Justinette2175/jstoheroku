const settings = require("./settings"); // settings.json

const knex = require("knex")({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

function formatDate(date){
  date.toISOString().slice(0, 10);
}

var first_name = process.argv[2];
var last_name = process.argv[3];
var date = process.argv[4];
var q = "SELECT * FROM famous_people WHERE last_name = $1 OR first_name = $1";

knex('famous_people')
.insert({first_name: first_name, last_name: last_name, birthdate : date})
.finally(function(){
  knex.destroy();
})


knex.select().from('famous_people').then((rows) => {
  console.log(rows);
});