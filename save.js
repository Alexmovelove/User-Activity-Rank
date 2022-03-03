const mysql = require("mysql2");
  

var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let password_mysql = settings.password_mysql;
let user_mysql = settings.user_mysql;
let title_name = settings.title_name;
let image_list = settings.image_list;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}
const connection = mysql.createConnection(config);

let mytable_day = 'a1810';  

const sql = `SELECT * FROM ${mytable_day} ORDER BY points DESC` ;
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
    console.log(users);
    for(let i=0; i < users.length; i++){

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "thewordgame",
  password: "xxxxxx"
});
    
        let author = users[i].author;
        
                sql3 = `UPDATE authors SET points=points+'${users[i].points}'  WHERE name='${author}' LIMIT 1000`;
            
                
                    console.log (sql3);

                connection.query(sql3,function(err, results) {
                if(err) console.log(err);
                });
                
connection.end();

    }
});
 
connection.end();