var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'forms'
});

const connectionStatus = function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  
  console.log('connected as id ' + connection.threadId);
};

connection.connect (connectionStatus); 


module.exports = connection;


// connection.query('SELECT * from users', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
