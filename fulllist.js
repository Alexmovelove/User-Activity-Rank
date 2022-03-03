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


let formula;

	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	

let mytable = 'a'+d;
console.log(mytable);

	let full = `![image.png](https://cdn.steemitimages.com/DQmVStQp6vdGH9kr7s1Pji4a97Rate5GPnh884r38v7GBgA/image.png)

Thank you for your activity! The leader of the rating receives a reward in the form of upvotes of the entire rating support team. The description of the command is below. I invite you to join the team. Every cent and every upvote counts!


<a href="https://steemit.com/steemit/@alexmove/it-is-important-please-vote-steem-market-rating-and-uniqueness-check
">Please see more information about our project here</a>

<h2>Rating for the day</h2>
|N|account|points for comments|points for posts|total score for the day|
------------|-------------|------------|---------- ---|---------|`;

const fs = require("fs");            
fs.appendFileSync(bd_name+d+".txt",full);




const sql = `SELECT * FROM ${mytable} ORDER BY points DESC` ;

	console.log(sql);

connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
	console.log(users);
	
	
	
     for(let i=0; i < users.length; i++){	
		 if (users[i].points == 0)
		 { 



		}
		else 
		{
                     
			let notfull;
			var d = new Date(); // Today!
			d.setDate(d.getDate()-num_day); // Yesterday!
			d = d.toJSON().split("T")[0];
			d = d.replace(/-/gi, '');
							 
			//        title = users[i].title.replace(/[^a-zа-яё0-9\s]/gi, ' ');

			console.log('|',i+1,'|',users[i].author,'|',users[i].comments,'|',users[i].posts,'|',users[i].points,'|');

			let z = Number(i + 1);

			notfull = '\n|'+z+'|'+users[i].author+'|'+users[i].comments+'|'+users[i].posts  +'|'+users[i].points+'|';

		  
			const fs = require("fs");            
			fs.appendFileSync(bd_name+d+".txt",notfull);

		 }

  //	console.log(notfull);

    }
	
	  //   console.log('|',i+1,'|',users[i].author,'|','<a href="'+ users[i].url+'">' + title + '</a>','|', users[i].comments,'|', users[i].length,'|');
	  
	//  + '\n|'+i+1+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|\n' 

	//console.log(notfull);
	      const fs = require("fs");            
		
//accounts = accounts.replace(/\n\n/gi, '\n');
let accounts_com = fs.readFileSync('com'+bd_name+d+'.txt').toString()	
accounts_com = accounts_com.replace(/\n\n/gi, '\n');

let accounts_post = fs.readFileSync('post'+bd_name+d+'.txt').toString()	
accounts_post = accounts_post.replace(/\n\n/gi, '\n');

full = `

<h2>Analysis of comments and posts, on the basis of which the overall rating is built:</h2>

List of participants by number of written comments:

` + accounts_com + `  

Список постов в сортировке по длине:

` + accounts_post + `

What is the rating of The Word Game. How it works. And why is it good: https://steemit.com/hive-171319/@alexmove/what-is-the-rating-of-the-word-game-how-it-works-and-why-is-it-good

Welcome to the ranking leader reward team: 

https://steemit.com/hive-171319/@alexmove/the-word-game-rewards-for-the-leader-of-the-daily-rating-of-the-word-game-i-invite-you-to-join-support-priglashayu
	
Full NodeJs Scripts:
https://github.com/Alexmovelove/User-Activity-Rank.git
https://steemit.com/hive-171319/@alexmove/the-word-game-all-nodejs-scripts-actual

Thanks for attention!
`


	  fs.appendFileSync(bd_name+d+".txt",full);
		
	
});
 
connection.end();