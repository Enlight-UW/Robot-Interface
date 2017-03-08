/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serialport = require('serialport');

/**
 * Port for sending serial data on a raspberry pi
 * we will get more into this later
 */
const port = new serialport('/dev/tty0', 9600);


/**
 * Create Express server.
 */
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// ejs is something we may use late to make the page look a little prettier
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public'))); // space for images and static stuff
/** bodyParser.urlencoded(options)
* Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
* and exposes the resulting object (containing the keys and values) on req.body
*/
app.use(bodyParser.urlencoded({
  extended: true
}));

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());

/**
 * Primary app routes.
 */
app.get('/', function getIndex(req, res) {
  console.log('GET: /index');
  res.render('index.html');
});
/*
  This is where we will handle the series of commands to the bot.
  On a post, we will read an array of commands and send them to
  the arduino over serialport
*/
app.post('/', function handlePost(req, res) {
  console.log('POST /index');
  console.log("Commands: " + req.body.cmd.cmd);
  // port.write(str);
  // right back to the page
  res.render('index.html');
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
