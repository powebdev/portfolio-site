var data = require('./models/data.js');
var express = require('express');

var skillData = data.skills;
var projectData = data.projects;

var app = express();

app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', {title: 'Hey', message: 'Hello everyone!'});
});

app.get('/skills', function(req, res) {
	var skillIcons = skillData.filter(isIconNotNull);
	var skillTags = skillData.filter(isIconNull);
	res.render('skills', {dataTags: skillTags, dataIcons: skillIcons});
});

app.get('/projects', function(req, res) {
	res.render('projects', {data: projectData});
});

app.get('/showcase', function(req, res) {
	res.render('showcase');
});

var server = app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
});

module.exports = server;

function isIconNull(item) {
	return item.icon === null;
}

function isIconNotNull(item) {
	return item.icon != null;
}
