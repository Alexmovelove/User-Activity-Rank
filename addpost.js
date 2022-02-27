const fs = require("fs");
const steem = require('steem');
//let accounts = fs.readFileSync('spisok.txt').toString().split(" ");
//console.log(accounts);
accounts = 0;
var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;

config = {
  host: "localhost",
  user: "root",
  database: bd_name,
  password: "root"
}


	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	console.log(d);   

let mytable_p = 'p'+d;
let mytable_c = 'c'+d;
let mytable = 'a'+d;


//accounts.forEach(function (element,i,array){
	
	  const mysql = require("mysql2");

const connection = mysql.createConnection(config);


  
  const sql = `SELECT * FROM spisok`;
    //const sql = `SELECT * FROM p0111 ORDER BY length DESC`;
    //     console.log(sql);   

  connection.query(sql,  function(err, results) {
        if(err) console.log(err);
             console.log(results[2]['author']);   

        users = results;
		accounts = users;
console.log(accounts);


len = accounts.length;
 for (yyy = 0; yyy < len; yyy++) 

{
      console.log('yyy');
      console.log(yyy);
	  
	
    steem.api.getDiscussionsByAuthorBeforeDate(accounts[yyy]['author'],null, new Date().toISOString().split('.')[0],20 , function(err, result) {
     if (result)
	 {		// console.log(result);
       
       
        var i, len = result.length;
                    for (i = 0; i < len; i++) 
                    {
                                                    
                       var raw = result[i];
                       console.log('Автор');
                       console.log(raw.author);
                       console.log('Заголовок');
                       console.log(raw.author);
                     console.log('Сообщество');

                       console.log(raw.category);
                         console.log('Длина поста');
                       console.log(raw.body_length);
                         console.log('Количество ожидаемого вознаграждения');
                       console.log(raw.pending_payout_value);
     console.log('Количество комментариев');                     
                     console.log(raw.replies.length);
                         console.log('Количество upvote');
                        let upvote = raw.active_votes.length-1;
                       console.log(raw.active_votes.length-1);
     console.log('Дата создания');                   
                       console.log(raw.created);
    let input = raw.created;
    var d = new Date(); // Today!

                        d.setDate(d.getDate() - num_day); // Yesterday!
                        d = d.toJSON().split("T")[0];
            let title = raw.title;

    title = title.replace(/[^a-zа-яё0-9\s]/gi, ' ');
            
    if ((input.indexOf(d) !== -1)&& (raw.category === hive_name))

    {
    body3R =  `| `+raw.author + `| <a href="`+raw.url+`">` + title + `</a>| `+ upvote + `| ` +  `????`  + `| ` + raw.children+`| ` + raw.body_length+ ' | \n';
    console.log(body3R);
    
            const mysql = require("mysql2");
  
const connection = mysql.createConnection(config);

connection.on('error', function() {});


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

                    const sql = `INSERT INTO ${mytable_p}(author, title, created, length, url, comments, upvotes, points,percent) VALUES('${raw.author}','${title}', '${raw.created}', '${raw.body_length}', '${raw.url}', '${raw.children}', '${upvote}','0','999')`;

                    connection.query(sql, function(err, results) {
                    if(err) console.log(err);
                    console.log(results);
                    });     

connection.end();

        console.log(raw.created);
            fs.appendFileSync("rank.txt",body3R);

    }
}
	 }


    });

}

});


