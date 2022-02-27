const fs = require("fs");
const steem = require('steem');
const mysql = require('mysql2');
let body3R = '';

var settings = require('./config.js');

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

	var query = { limit : 100, tag : hive_name };


steem.api.getDiscussionsByTrending(query, function(err, result) {

      console.log(result.length);
       
       if (result)
	   {
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
					console.log(raw.permlink);
                   //      console.log('Длина поста');
                   //    console.log(raw.body_length);
                     //    console.log('Количество ожидаемого вознаграждения');
                       console.log(raw.category);
     console.log('Сообщество');                     
                    // console.log(raw.replies.length);
                   //      console.log('Количество upvote');
                        let upvote = raw.active_votes.length-1;
                      // console.log(raw.active_votes.length-1);
     console.log('Дата создания');                   
     console.log(raw.created);
    let input = raw.created;
    var d = new Date(); // Today!

                        d.setDate(d.getDate()-num_day); // Yesterday!
                        d = d.toJSON().split("T")[0];
            let title = raw.title;

    title = title.replace(/[^a-zа-яё0-9\s]/gi, ' ');
            
   // if ((input.indexOf(d) !== -1)&& (raw.category === 'hive-171319'))
  // if (input.indexOf(d) !== -1)

        let spisok = raw.author + " ";
		const fs = require("fs");            
		fs.appendFileSync("spisok06.txt",spisok);
		
  const mysql = require("mysql2");
  

const connection = mysql.createConnection(config);

//connection.on('error', function() {});

        const sql = `INSERT INTO spisok(author) VALUES('${raw.author}')`;
		 
	
         console.log(sql);

         connection.query(sql, function(err, results) {
         if(err) console.log(err);
          console.log(results);
                    });     
         connection.end();
		 
		 

}


}
		});
//});

