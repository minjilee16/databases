// var Sequelize = require('Sequelize');
// var orm = new Sequelize('chat', 'fred', 'fred');
// var User = orm.define('User', {
//   username: Sequelize.STRING
// });
// var Message = orm.define('Message', {
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// User.hasMany(Message);
// Message.belongsTo(User);

// User.sync();
// Message.sync();

var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  host: 'http://127.0.0.1:3000/classes', // I THINK THIS IS RIGHT
  user: 'root', //I THINK THIS IS RIGHT
  password: 'plantlife'
});
// this is how we connect to mysqul
// createConnection is function that we use for mysql 
 

con.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});


module.exports.con = con;
// this is how we connect to databases 
// mysql is database that we are using 
// 