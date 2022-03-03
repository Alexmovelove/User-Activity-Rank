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

Лидер рейтинга (Rating leader): 

Пост для вознаграждения (Reward post):

Thank you for your activity! The leader of the rating receives a reward in the form of upvotes of the entire rating support team. The description of the command is below. I invite you to join the team. Every cent and every upvote counts!

Благодарим за активность! Лидер рейтинга получает вознаграждение в виде апвоутов всей команды поддержки рейтинга. Описание команды ниже по ссылке. Приглашаю присоединиться к команде. Важен каждый цент и каждый апвоут!

I invite you to look at our projects, and support by vote for witness on the site: https://steemitwallet.com/~witnesses 
accounts: alexmove.witness and steemit-market

Active user rating is one of the projects of our team:
<a href="https://steemit.com/hive-171319/@alexmove/eto-vazhno-prizyv-progolosovat-steem-market-reiting-i-proverka-unikalnosti">Больше инорфмации о наших проектах тут</a>
<a href="https://steemit.com/steemit/@alexmove/it-is-important-please-vote-steem-market-rating-and-uniqueness-check
">Please see more information about our project here</a>

<h2>Анализ комментариев и постов, на основании которого построен общий рейтинг:</h2>


<a href="https://steemit.com/@alexmove.witness/w${bd_name}rankpost${d}">Ссылка на рейтинг постов</a>
<a href="https://steemit.com/@alexmove.witness/${bd_name}rankcom${d}">Ссылка на рейтинг комментариев</a>

<h2>Рейтинг за день </h2>
|N|аккаунт|баллы за комментарии|баллы за посты|общий балл за день|
------------|-------------|------------|-------------|---------|`;


const fs = require("fs");            
fs.appendFileSync(bd_name+d+".txt",full);




const sql = `SELECT * FROM ${mytable} ORDER BY points DESC` ;

	console.log(sql);

connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
	console.log(users);
     for(let i=0; i < users.length; i++){
                     
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


  //	console.log(notfull);

    }
	
	  //   console.log('|',i+1,'|',users[i].author,'|','<a href="'+ users[i].url+'">' + title + '</a>','|', users[i].comments,'|', users[i].length,'|');
	  
	//  + '\n|'+i+1+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|\n' 

	//console.log(notfull);
	
	

full = `

Что такое рейтинг The Word Game. Как это работает. И почему это хорошо:
https://steemit.com/hive-171319/@alexmove/chto-takoe-reiting-the-word-game-kak-eto-rabotaet-i-pochemu-eto-khorosho

What is the rating of The Word Game. How it works. And why is it good: https://steemit.com/hive-171319/@alexmove/what-is-the-rating-of-the-word-game-how-it-works-and-why-is-it-good

Приглашение присоединиться к команде вознаграждения лидера рейтинга (Welcome to the ranking leader reward team): 

https://steemit.com/hive-171319/@alexmove/the-word-game-rewards-for-the-leader-of-the-daily-rating-of-the-word-game-i-invite-you-to-join-support-priglashayu
	
Full NodeJs Scripts:
https://steemit.com/hive-171319/@alexmove/the-word-game-all-nodejs-scripts-actual

Спасибо за внимание!

`


	
      const fs = require("fs");            
	  fs.appendFileSync(bd_name+d+".txt",full);
		
		
});
 
connection.end();