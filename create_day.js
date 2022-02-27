const mysql = require("mysql2");
  
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
const connection = mysql.createConnection(config);



	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	console.log(d);   

let mytable_p = 'p'+d;
let mytable_c = 'c'+d;
let mytable = 'a'+d;


const sql = `SELECT * FROM spisok`   ;

    console.log(sql);

connection.query(sql,  function(err, results) {
    if(err) console.log(err);
	
    const users = results;
    console.log(users);
    console.log(users.length);
    console.log(users.length);
    console.log(users.length);
    console.log(users.length);
    console.log(users.length);
    for(let i=0; i < users.length; i++){


        let author = users[i].author;
        const sql4 = `INSERT INTO ${mytable}(author, comments, posts, points) VALUES('${author}', '0','0','0')`;
		
		    console.log(sql4);

            connection.query(sql4,function(err, results) {
                if(err) console.log(err);   });
    }
});


