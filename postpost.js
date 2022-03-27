const mysql = require("mysql2");
const steem = require('steem');
const fs = require("fs");            
	
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
let wifkey = settings.wifkey;
let votey = settings.account;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}

	//for (var yyy = 0; yyy < 2; yyy++)
    
	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	

//let accounts = fs.readFileSync('..\\com'+d+'.txt').toString()
let accounts = fs.readFileSync('post'+bd_name+d+'.txt').toString()

		
		var currentPath = process.cwd();
console.log(currentPath);
console.log(__dirname+"aaareport");
// Prints: /Users/mjr
//console.log(path.dirname(__filename));
// Prints: /Users/mjr

//let accounts = fs.readFileSync('report20211225.txt').toString();

accounts = accounts.replace(/\n\n/gi, '\n');
							
console.log(accounts);

let permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

console.log(permlink);
let title = title_name+" POST RANK "+d;
let title_link = bd_name+"rankpost"+d;
console.log(title_link);


steem.broadcast.comment(
	wifkey, // Your posting wif
	'', // Parent Author
	hive_name, // Parent Permlink
	votey,
	title_link, // Your post permlink
	title, // Title
	accounts, // Body 	
		{ tags: ['steem','steemit','ukraine','js','games'], app: 'ganeshaway' }, // Json Metadata
		function(err, result) {
			console.log(err, result)});


