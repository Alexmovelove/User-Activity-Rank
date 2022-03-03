
const mysql = require("mysql2");
const steem = require('steem');
const config = require('./config');
let num_day = 1;
	
var d = new Date(); // Today!
d.setDate(d.getDate()-num_day); // Yesterday!
d = d.toJSON().split("T")[0];
d = d.replace(/-/gi, '');
let wifkey = '5JUERWQ7cu4RDYHMoEtmhVfu3MxCUZ9fo2AHWCigwT9LvVz1eFb';
let votey = "alexmove";
	
var d = new Date(); // Today!

d.setDate(d.getDate() - 1); // Yesterday!
d = d.toJSON().split("T")[0];

let permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
const url_post = "20220303t005841954z";
let answer2 = "just cron test. thx.";

steem.broadcast.comment(
						wifkey, // Your posting wif
						"alexmove", // Parent Author
						url_post, // Parent Permlink
						votey,
						permlink, // Your post permlink
						'', // Title
						answer2, // Body
						{ tags: ['thanks'], app: 'ganeshaway' }, // Json Metadata
						function(err, result) {
							console.log(err, result)});
				