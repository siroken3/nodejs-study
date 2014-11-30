var influx = require('influx');

var username = 'root';
var password = 'root';
var database = 'example';

var client = influx({
  host: 'localhost',
  username: username,
  password: password,
  database: database}
);

client.createDatabase('zabbix', function(err) {
  if (err) throw err;
  console.log('database created.');
});
