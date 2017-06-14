var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // fetch all messages
      // id, text , roomname and username 
      var queryString = 'SELECT messages.id, messages.text, messages.username, users.username FROM MESSAGES left out join users on (messages.userid= users.id) order by messages.id desc;';
      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },  // a function which produces all the messages
    post: function (callback) {
    // store a messsage 
      var queryString = 'insert into messages (text, userid, roomname) value (?, (select id from users where username =? limit 1), ?)';
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // fetch all users 
      var queryString = 'SELECT * FROM USERNAMES;';
      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },
    post: function (parasm, callback) {
    // create a user 
      var queryString = 'insert into users(username) value (?)';
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    }
  }
};

// var mockMessages = 

module.exports.messages.get();

// console.log("********")

// function (error, results){
//   if(error){
//     callback(error, null);
//   } else {
//     callback(null, results)
//   }
// }

// queryArgs = [1,2,3]