
const http = require('http');

const server = http.createServer((req,res)=>{
     console.log("resquest : ",req);

     res.setHeader("Content-Type","text/html");
     if(req.url === '/'){
        res.write('<html>');
        res.write('<header><title>This is form page</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
     }
     res.write('<html>');
     res.write('<header><title>This is nodejs application</title></header>');
     res.write('<body><h1>This Node js html Content</h1></body>');
     res.write('</html>');
     res.end();
     
})

server.listen(3000);