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

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}



let wifkey = '5JUERWQ7cu4RDYHMoEtmhVfu3MxCUZ9fo2AHWCigwT9LvVz1eFb';
let votey = "alexmove";

	//for (var yyy = 0; yyy < 2; yyy++)
    
	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	

let accounts = fs.readFileSync(bd_name+d+'.txt').toString();

//accounts = accounts.replace(/\n\n/gi, '\n');
							
console.log(accounts);

let permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

console.log(permlink);
let title = "The Word Game💎 "+ title_name +" " + d+" Daily Rating. With Reward!";


steem.broadcast.comment(
	wifkey, // Your posting wif
	'', // Parent Author
	//'hive-171319', // Parent Permlink
	hive_name, // Parent Permlink
	votey,
	permlink, // Your post permlink
	title, // Title
	accounts, // Body 	
		{ tags: ['steem','club5050','steemit','ukraine','js','games'], app: 'ganeshaway' }, // Json Metadata
		function(err, result) {
			console.log(err, result)});


