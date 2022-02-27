const mysql = require("mysql2");
	
var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let title_name = settings.title_name;
let image_list = settings.image_list;

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
	
let mytable = 'c'+d;


	let full = image_list+`

<a href="https://steemit.com/hive-171319/@alexmove/eto-vazhno-prizyv-progolosovat-steem-market-reiting-i-proverka-unikalnosti">Поддержите проект голосованием за свидетелей</a>
<a href="https://steemit.com/steemit/@alexmove/it-is-important-please-vote-steem-market-rating-and-uniqueness-check
">Support the project by voting for witnesses</a>


Сортировка по количеству комментариев. 

|N|acc|ком.|баллы|
------------|-------------|------------|------------|`;


const fs = require("fs");            
//fs.appendFileSync("..\\com"+d+".txt",full);
fs.appendFileSync("com"+bd_name+d+".txt",full);


const sql = `SELECT * FROM ${mytable} ORDER BY points DESC` ;
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
     for(let i=0; i < users.length; i++){
                     
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

	
		console.log('|',i+1,'|',users[i].author,'|', users[i].count,'|',users[i].points,'|');
		
   let z = Number(i + 1);
   
   notfull = '\n|'+z+'|'+users[i].author+'|'+ users[i].count+'|'+ users[i].points+'|\n';
  
const fs = require("fs");            
//fs.appendFileSync("..\\com"+d+".txt",notfull);
fs.appendFileSync("com"+bd_name+d+".txt",notfull);



    }

	

full = `\n

Если есть идеи или замечания, то пишите.
Спасибо за внимание


`


	
      const fs = require("fs");            
	//  fs.appendFileSync("..\\report"+d+".txt",full);
	  fs.appendFileSync("com"+bd_name+d+".txt",full);
		
		
});
 
connection.end();