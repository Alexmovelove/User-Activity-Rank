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


	let full = `
|N|acc|title|comm.|length|
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
  
fs.appendFileSync("post"+bd_name+d+".txt",notfull);


  //	console.log(notfull);

    }
	
	  //   console.log('|',i+1,'|',users[i].author,'|','<a href="'+ users[i].url+'">' + title + '</a>','|', users[i].comments,'|', users[i].length,'|');
	  
	//  + '\n|'+i+1+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|\n' 

	//console.log(notfull);
	
	

full = `\n
`


	
	  fs.appendFileSync("post"+bd_name+d+".txt",full);
		
		
});
 
connection.end();