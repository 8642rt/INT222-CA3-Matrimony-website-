var mysql = require('mysql');

module.exports = {
	connection : mysql.createConnection ({
		host : 'localhost',
		database : 'matrimoni',//'DBMSproject',
		user : 'root', // mysql username
	 	password : '', //mysql password
	})
}
