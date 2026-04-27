const http = require('http');
const path = require('path');
const handler = require('serve-handler');

const root = path.join(__dirname, 'public', 'dist');
const port = Number(process.env.PORT) || 80;

const server = http.createServer((req, res) =>
  handler(req, res, { public: root, cleanUrls: true })
);

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${root} on http://0.0.0.0:${port}`);
});
