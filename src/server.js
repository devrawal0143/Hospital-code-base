/*
src/server.js - small server stub
*/
const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/' || req.url === '/index.html') {
res.writeHead(200, {'Content-Type':'text/html'});
res.end('<h1>Hospital CTF - repository</h1>');
return;
}
if (req.url === '/_health') {
res.writeHead(200, {'Content-Type':'application/json'});
res.end(JSON.stringify({ ok: true }));
return;
}
res.writeHead(404);
res.end('Not Found');
});
if (require.main === module) {
server.listen(3000, () => {
console.log('Server listening on http://localhost:3000');
});
}
