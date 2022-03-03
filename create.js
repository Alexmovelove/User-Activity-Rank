//(поменять название таблицы)
//Создать пост в стимите.

/*
node /mnt/disk15/familyrank/User-Activity-Rank/create.js
node /mnt/disk15/familyrank/User-Activity-Rank/create_spisok.js
node /mnt/disk15/familyrank/User-Activity-Rank/spisok.js
node /mnt/disk15/familyrank/User-Activity-Rank/addcom.js
node /mnt/disk15/familyrank/User-Activity-Rank/addpost.js
node /mnt/disk15/familyrank/User-Activity-Rank/create_day.js
node /mnt/disk15/familyrank/User-Activity-Rank/sortcom.js
node /mnt/disk15/familyrank/User-Activity-Rank/sortcom.js
node /mnt/disk15/familyrank/User-Activity-Rank/sortpost.js
node /mnt/disk15/familyrank/User-Activity-Rank/sortpost.js
node /mnt/disk15/familyrank/User-Activity-Rank/sum.js
node /mnt/disk15/familyrank/User-Activity-Rank/listcom.js
node /mnt/disk15/familyrank/User-Activity-Rank/listpost.js
node /mnt/disk15/familyrank/User-Activity-Rank/fulllist.js
node /mnt/disk15/familyrank/User-Activity-Rank/fulllistpost.js
*/

/*
spisok_twg
create
addcom
addpost
create_day
sortcom
sortcom
sortpost
sortpost
sum
listcom
postcom
listpost
postpost
fulllist
fulllistpost
*/

let date_know;

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

let sql8 = `create database ${bd_name}`;
console.log(sql8);						 

connection.query(sql8, function(err, results) {
if(err) console.log(err);
else console.log("Таблица создана");
});

/*
let sql = `create table if not exists ${mytable_p}(
  id int primary key auto_increment,
  author varchar(255) not null,
  title varchar(255) not null,
  length int not null,
 url varchar(255) UNIQUE KEY,
 comments int not null,
upvotes int not null,
 points float not null)`;

*/

let sql2 = `create table if not exists ${mytable_c}(
  id int primary key auto_increment,
  author varchar(255) UNIQUE KEY,
  count int not null,
  points float not null
  )`;
  
let sql3 = `create table if not exists ${mytable}(
  id int primary key auto_increment,
  author varchar(255) UNIQUE KEY,
  comments float not null,
  posts float not null,
  points float not null 
  )`;
 console.log(sql3);
 
let sql44 =  `create table if not exists ${mytable_p}( id int primary key auto_increment, author varchar(255) not null, title varchar(255) not null, created varchar(255) not null, length int not null, url varchar(255) UNIQUE KEY, comments int not null, upvotes int not null, points float not null, percent float not null)`;
                    console.log(sql44);
                    console.log(sql44);
                    console.log(sql44);
                    console.log(sql44);
                    console.log(sql44);
                    console.log(sql44);
                    console.log(sql44);

         connection.query(sql44, function(err, results) {
                    if(err) console.log(err);
                    console.log(results);
                    });     

 connection.query(sql2, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});

 connection.query(sql3, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});

connection.end();