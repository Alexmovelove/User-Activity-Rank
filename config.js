exports.num_day = 27;
exports.wifkey = "5HqoumrYjyo1kBvKr4dkwyc7VfFogp48n81qSrrUhXvUr7v4rS7";
exports.account = "alexmove.witness";

	var d = new Date(); // Today!
	d.setDate(d.getDate()-exports.num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
//exports.bd_name = "familyrank";
exports.bd_name = "family2";
//exports.password_mysql = "BogSilSavaof";
exports.password_mysql = "root";
//exports.user_mysql = "main";
exports.user_mysql = "root";
exports.hive_name = "hive-153018";
exports.image_list = `![`+d+`.png](https://cdn.steemitimages.com/DQmbXSrdwm2MntCHrKSyfhAgNtQhMXNdUXK7zv8ztYAHzCV/`+d+`.png)`;
exports.title_name = "SteemFamily";
exports.url_post = `
![Checking The Uniqueness SteemFamily (1).png](https://cdn.steemitimages.com/DQmVKcXUyc38bw7P9cCfARZwZbtVXwUhjYF2K1bNnK6BXHF/Checking%20The%20Uniqueness%20SteemFamily%20(1).png)
`;


