const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var input = process.argv[2];
var q = "SELECT * FROM famous_people WHERE last_name = $1 OR first_name = $1";

client.connect((err)=> {
  if (err){
    return console.log("Connection Error", err);
  }
  client.query(q, [input], (err, result) => {:
    if(err){
      return console.log("error running query", err);
    }
    console.log(result.rows);
    for ( let n = 0; n<result.rows.length; n++){
      let res = result.rows[n];
      console.log(
        `- ${res.id}: ${res.first_name} ${res.last_name}, born ${res.birthdate}`
      )
    }
    client.end()
  })
})