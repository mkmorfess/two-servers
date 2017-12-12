var http = require("http");

var PORT1 = 7000;

var list = ["You are amazing", "You are okay..", "You suck.. gtfo", "Hey there!", "Check it out! A Server!", "Please leave...", "You can stay for now..."]

var random1 = list[Math.floor(Math.random() * list.length)];



function somethingGood(request, response) {
	var random2 = list[Math.floor(Math.random() * list.length)]
	response.end(random2);

}


var server1 = http.createServer(somethingGood);

server1.listen(PORT1, function(){

	console.log("Server listening on: http://localhost:" + PORT1);

})


var PORT2 = 7500;

function somethingBad(request, response) {
	var random1 = list[Math.floor(Math.random() * list.length)];
	response.end(random1);

}


var server2 = http.createServer(somethingBad);

server2.listen(PORT2, function(){

	console.log("Server listening on: http://localhost:" + PORT2);

})