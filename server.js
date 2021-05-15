const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  let url, contentType;
  contentType = {"Content-Type": "text/html"}
  if(req.url.startsWith('/dist/')){
    url = `public${req.url}`
  }else if(req.url.startsWith('/data/')) {
    // サンプルのjsonデータを置いとく
    url = `public${req.url}`
    contentType = {"Content-Type": "application/json; charset=UTF-8"}
  }else{
    url = 'public/index.html'
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
