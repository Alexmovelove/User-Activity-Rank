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



	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	console.log(d);   

let mytable_p = 'p'+d;
let mytable_c = 'c'+d;
let mytable = 'a'+d;


const sql = `SELECT * FROM ${mytable_p} ORDER BY length DESC` ;
connection.query(sql,  function(err, results) {
	  //  console.log(results);

    if(err) console.log(err);
    const users = results;
    console.log(users);
	
    for(let i=0; i < users.length; i++){
               let formula = (users.length - i)/10;

const connection = mysql.createConnection(config);
            const sql = `UPDATE ${mytable_p} SET points=${formula} WHERE url='${users[i].url}'`;
            
            connection.query(sql,function(err, results) {
            if(err) console.log(err);
           // console.log(results);
            });
            
            const sql12 = `UPDATE ${mytable} SET posts=${formula} WHERE
			author='${users[i].author}'`;
            
            connection.query(sql12,function(err, results) {
            if(err) console.log(err);
            //console.log(results);
            });
            
connection.end();

      console.log('|',i+1,'|',users[i].author,'|','<a href="',users[i].url,'">',users[i].length,'</a>','|',formula,'|');
     // console.log('|',i+1,'|',users[i].author,'|',users[i].upvotes);
     // console.log('|',i+1,'|',users[i].author,'|',users[i].comments);

    }
});
 
connection.end();