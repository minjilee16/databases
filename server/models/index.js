var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      queryString = 'SELECT * FROM MESSAGES;';
      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },  // a function which produces all the messages
    post: function (callback) {
      var queryString = 'insert into messages (id, text, roomname, username) value (?,?,?)';
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      queryString = 'SELECT * FROM USERNAMES;';
      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },
    post: function (callback) {
      var queryString = 'insert into USERNAMES (id, name) value (?,?id)';
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    }
  }
};

var mockMessages = 

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