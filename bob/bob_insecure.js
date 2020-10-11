var http = require('http');

http.createServer((request, response) => {
	response.writeHead(200, {
		'Set-Cookie': 'msg=bob-is-asking-for-alice'
	});
	response.end('OK');
}).listen(80);
