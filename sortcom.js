const mysql = require("mysql2");
  

var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;

config = {
  host: "localhost",
  user: "root",
  database: bd_name,
  password: "root"
}
const connection = mysql.createConnection(config);



let formula;

	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	console.log(d);   

let mytable_p = 'p'+d;
let mytable_c = 'c'+d;
let mytable = 'a'+d;


  
let sql3 = `create table if not exists ${mytable}(
  id int primary key auto_increment,
  author varchar(255) not null,
  comments float not null,
  posts float not null,
  points float not null 
  )`;

 
     connection.query(sql3,function(err, results) {
            if(err) console.log(err);
            });
			
			
			
            
const sql = `SELECT * FROM ${mytable_c} ORDER BY count DESC`  ;
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

                   
const connection = mysql.createConnection(config);
            const sql = `UPDATE ${mytable_c} SET points='${formula}' WHERE author='${users[i].author}' LIMIT 1000`;
            console.log(sql);
			
			
        //  const sql = `UPDATE ${mytable} SET points=${formula} WHERE id=${users[i].id}`;


            connection.query(sql,function(err, results) {
            if(err) console.log(err);
            });
            
            const sql12 = `UPDATE ${mytable} SET comments=${formula} WHERE author='${users[i].author}'`;
            console.log(sql12);
			
            connection.query(sql12,function(err, results) {
            if(err) console.log(err);
            //console.log(results);
            });
            
            
        //console.log (users[i].id);
            
connection.end();

      console.log('|',i+1,'|',users[i].author,'|',users[i].count,'|',formula,'|');

    }
});
 
connection.end();