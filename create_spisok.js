//CREATE DATABASE [IF NOT EXISTS] имя_базы_даных;


const mysql = require("mysql2");

var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}

const connection = mysql.createConnection(config);

let mytable_p = 'posts01';
let mytable_c = 'c1711';
let mytable_day = 'a1711';

let sql = `create table if not exists spisok( id int primary key auto_increment, author varchar(255) UNIQUE KEY)`;

//let sql = `create table if not exists post_number( id int primary key auto_increment, number int)`;

connection.query(sql, function(err, results) {
if(err) console.log(err);
else console.log("Таблица создана");
});

connection.end();


