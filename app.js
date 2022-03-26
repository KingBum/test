const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead('200', {'content-type': 'text/html'});
    fs.readFile('index.html', 'utf8', function (err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
    });

}).listen(8000);