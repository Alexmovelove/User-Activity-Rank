exports.num_day = 1;

	var d = new Date(); // Today!
	d.setDate(d.getDate()-exports.num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
exports.bd_name = "familyrank";
exports.password_mysql = "BogSilSavaof";
exports.user_mysql = "main";
exports.hive_name = "hive-153018";
exports.image_list = `![`+d+`.png](https://cdn.steemitimages.com/DQmbXSrdwm2MntCHrKSyfhAgNtQhMXNdUXK7zv8ztYAHzCV/`+d+`.png)`;
exports.title_name = "SteemFamily";
exports.url_post = `
![Checking The Uniqueness SteemFamily (1).png](https://cdn.steemitimages.com/DQmVKcXUyc38bw7P9cCfARZwZbtVXwUhjYF2K1bNnK6BXHF/Checking%20The%20Uniqueness%20SteemFamily%20(1).png)
`;

