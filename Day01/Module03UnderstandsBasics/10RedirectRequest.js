
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
     console.log("resquest : ",req);
     const url = req.url;
     const method = req.method;
     res.setHeader("Content-Type","text/html");

     if(req.url === '/'){
        res.write('<html>');
        res.write('<header><title>This is form page</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
     }
     
     if(req.url === '/message' && method === 'POST'){
      // res.write('<html>');
      // res.write('<header><title>MESSAGE</title></header>');
      // res.write('<body><h1> 2ND page message </h1></body>');
      // res.write('</html>');
      // return res.end();

         fs.writeFileSync('message.txt' ,'Dummy');
         res.statusCode = 302 // redirect
         res.setHeader('Location','/');
         return res.end();
     }
     res.write('<html>');
     res.write('<header><title>This is nodejs application</title></header>');
     res.write('<body><h1>This Node js html Content</h1></body>');
     res.write('</html>');
     res.end();
     
})

server.listen(3000,()=>{
    console.log(`server is listening on port 3000`);
});