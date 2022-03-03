const mysql = require("mysql2");
  

var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let password_mysql = settings.password_mysql;
let user_mysql = settings.user_mysql;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}


let formula;


let mytable = 'c1810';
let mytable_day = 'a1810';


const sql = `SELECT * FROM authors ORDER BY points DESC`    ;
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
     for(let i=0; i < users.length; i++){
                               
                   if (users[i].count>0) {
                        formula = (users.length - i)/10;
                    //  console.log(users[i].count);

                   } else { formula = 0;
                 //  console.log('sdfsdfs');
                   }

        
      console.log('|',i+1,'|',users[i].name,'|',users[i].points,'|');

    }
});
 
connection.end();