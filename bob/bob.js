const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (request, response) => {
    response.writeHead(200);
    response.write("Hello, Alice! Hope that Amanda cannot hear us!");
    response.end();
}).listen(443);