const fs = require("fs");
const steem = require('steem');
let input, hive, fullbody, x1;
var author,author2;
var permlinkR;
var err;
let stat, stat2; 

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





	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	console.log(d);   

let mytable_p = 'p'+d;
let mytable_c = 'c'+d;
let mytable = 'a'+d;


             
//let array = fs.readFileSync('spisok.txt').toString().split("\n");
//let test_a = array[0].split(' ');


	  const mysql = require("mysql2");

  const sql = `SELECT * FROM spisok`;
    //const sql = `SELECT * FROM p0111 ORDER BY length DESC`;
    //     console.log(sql);   

const connection = mysql.createConnection(config);


  connection.query(sql,  function(err, results) {
        if(err) console.log(err);
             console.log(results);   
		let test_a = results;
		           //  console.log(results[2]['author']);   


len1 = test_a.length;
for (x1 = 10; x1 < len1; x1++) {

    steem.api.getDiscussionsByComments({
                    "start_author": test_a[x1]['author'],
                   // "start_author": 'allfabeta',
                    "limit": 100
                }, function (err, result) {
					console.log(err, result);
                    if (err === null) {
                    stat = 0;
                    console.log(x1);
                   //	 console.log(test_a[x1]['author']);

                    var i, len = result.length;
                    for (i = 0; i < len; i++) {
                                                
                        var discussion = result[i];
                        var d = new Date(); // Today!
                        d.setDate(d.getDate() - num_day); // Yesterday!
                        d = d.toJSON().split("T")[0];
                        
                        permlinkR = discussion.permlink;
                        
                        author = discussion.author;
                        author2 = author; 
                        input = discussion.created;
                        hive = discussion.category;

                        if ((input.indexOf(d) !== -1) && (hive === hive_name)) {
                          stat=stat+1;
                          stat2 = stat;
                          fullbody = fullbody + ' ' + discussion.body;
                        }}
                            
                            const mysql = require("mysql2");
  
const connection = mysql.createConnection(config);

connection.on('error', function() {});

let sql22 = `create table if not exists ${mytable_c}(
  id int primary key auto_increment,
  author varchar(255) not null,
  count int not null,
  points float not null
  )`;
  
        connection.query(sql22, function(err, results) {
                    if(err) console.log(err);
                    console.log(results);
                    });    
					
					
                    const sql = `INSERT INTO ${mytable_c}(author, count,points) VALUES('${author}', '${stat}','0')`;

                    connection.query(sql, function(err, results) {
                    if(err) console.log(err);
                    console.log(results);
                    });     

connection.end();

                    console.log('68 строка');           

                    console.log(stat,author);           
                                        
                    } else {
                        console.log('внимание поломка поломка поломка поломка');
                }}
                    
            
                    );


}


  });