const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  let url, contentType;
  contentType = {"Content-Type": "text/html"}
  if(req.url.startsWith('/dollar-cost-averaging-simulator/dist/')){
    url = `${req.url}`.replace('/dollar-cost-averaging-simulator/', '')
  }else{
    url = 'index.html'
  }
  console.log(url)
  if (fs.existsSync(url)) {
    fs.readFile(url, (err, data) => {
      if (!err) {
        res.writeHead(200, contentType);
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
