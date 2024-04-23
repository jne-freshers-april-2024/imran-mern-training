

const http = require('http');

const server = http.createServer((req,res)=>{
     console.log("resquest : ",req);

     res.setHeader("Content-Type","text/html");

     res.write('<html>');
     res.write('<header><title>This is nodejs application</title></header>');
     res.write('<body><h1>This Node js html Content</h1></body>');
     res.write('</html>');
     res.end();
     
})

server.listen(3000);


// request content data in header is this meta data 