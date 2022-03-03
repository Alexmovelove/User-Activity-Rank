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
	

let mytable = 'p'+d;


	let full = image_list+`
	Сортировка по длине постов. 


I invite you to look at our projects, and support by vote for witness on the site: https://steemitwallet.com/~witnesses 
accounts: alexmove.witness and steemit-market

Active user rating is one of the projects of our team:
<a href="https://steemit.com/hive-171319/@alexmove/eto-vazhno-prizyv-progolosovat-steem-market-reiting-i-proverka-unikalnosti">Больше инорфмации о наших проектах тут</a>
<a href="https://steemit.com/steemit/@alexmove/it-is-important-please-vote-steem-market-rating-and-uniqueness-check
">Please see more information about our project here</a>



<a href="https://steemit.com/hive-171319/@alexmove/eto-vazhno-prizyv-progolosovat-steem-market-reiting-i-proverka-unikalnosti">Поддержите проект голосованием за свидетелей</a>
<a href="https://steemit.com/steemit/@alexmove/it-is-important-please-vote-steem-market-rating-and-uniqueness-check
">Support the project by voting for witnesses</a>

|N|acc|title|ком.|длина|
------------|-------------|------------|-------------|----|`;


const fs = require("fs");            
fs.appendFileSync("post"+bd_name+d+".txt",full);




const sql = `SELECT * FROM ${mytable} ORDER BY length DESC` ;
console.log(sql);
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
	
     for(let i=1; i < users.length; i++){	
let notfull;
		var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
					 
                   if (users[i].count>0) {
                        formula = (users.length - i)/10;
                    //  console.log(users[i].count);

                   } else { formula = 0;
                 //  console.log('sdfsdfs');
                   }
  

            title = users[i].title.replace(/[^a-zа-яё0-9\s]/gi, ' ');

		console.log('|',i+1,'|',users[i].author,'|','<a href="'+ users[i].url+'">' + title + '</a>','|', users[i].comments,'|', users[i].length,'|',users[i].percent,'|');
		
   let z = Number(i + 1);
   notfull = '\n|'+z+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|\n';
  
const fs = require("fs");            
fs.appendFileSync("post"+bd_name+d+".txt",notfull);


  //	console.log(notfull);

    }
	
	  //   console.log('|',i+1,'|',users[i].author,'|','<a href="'+ users[i].url+'">' + title + '</a>','|', users[i].comments,'|', users[i].length,'|');
	  
	//  + '\n|'+i+1+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|\n' 

	//console.log(notfull);
	
	

full = `\nОписание процесса составления Rank: https://steemit.com/hive-171319/@alexmove/rank-post-checking-for-the-uniqueness-of-the-text-or-nodejs-for-steemit

Если есть идеи или замечания, то пишите.
Спасибо за внимание


`


	
      const fs = require("fs");            
	  fs.appendFileSync("post"+bd_name+d+".txt",full);
		
		
});
 
connection.end();