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
let title_name = settings.title_name;
let image_list = settings.image_list;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}
const connection = mysql.createConnection(config);

let mytable = 'c1810';

             
let array = fs.readFileSync('spisok.txt').toString().split("\n");
let test_a = array[0].split(' ');
console.log(test_a[2]);

len1 = test_a.length;
for (x1 = 0; x1 < len1; x1++) {

    steem.api.getDiscussionsByComments({
                    "start_author": test_a[x1],
                    "limit": 100
                }, function (err, result) {
                 // console.log(err, result);
                    if (err === null) {
                    stat = 0;
                    console.log('asdasdasdas');

                    var i, len = result.length;
                    for (i = 0; i < len; i++) {
                                                
                        var discussion = result[i];
                        var d = new Date(); // Today!
                        d.setDate(d.getDate() - 1); // Yesterday!
                        d = d.toJSON().split("T")[0];
                        
                        permlinkR = discussion.permlink;
                        
                        author = discussion.author;
                        author2 = author; 
                        input = discussion.created;
                        hive = discussion.category;

                        if ((input.indexOf(d) !== -1) && (hive === 'hive-171319')) {
                          stat=stat+1;
                          stat2 = stat;
                          fullbody = fullbody + ' ' + discussion.body;
                        }}
                            
                            const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "thewordgame",
  password: "xxxxxx"
});

connection.on('error', function() {});

                    const sql = `INSERT INTO ${mytable}(author, count,points) VALUES('${author}', '${stat}','0')`;

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
