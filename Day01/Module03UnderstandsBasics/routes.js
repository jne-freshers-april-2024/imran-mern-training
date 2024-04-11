const fs = require('fs');
const { Module } = require('module');
   
const requestHanders =(req,res)=>{
     const method = req.method;
     if(req.url === '/'){
        res.write('<html>');
        res.write('<header><title>This is form page</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
     }
     
     if(req.url === '/message' && method === 'POST'){
         const body = [];
         req.on('data',(chunk)=>{
            console.log("chuck of data",chunk);
            body.push(chunk);
         });

         req.on('end',()=>{
             const parseData = Buffer.concat(body).toString();
             console.log(`buffer data ${parseData}`);
             const message = parseData.split('=')[1];
             console.log("split by = sign ",message);

             fs.writeFile('message.txt' ,message,(error)=>{
                res.statusCode = 302 // redirect
                res.setHeader('Location','/');
                return res.end();
             });

         });

     }

    
     res.setHeader("Content-Type","text/html");
     res.write('<html>');
     res.write('<header><title>This is nodejs application</title></header>');
     res.write('<body><h1>This Node js html Content</h1></body>');
     res.write('</html>');
     res.end();

}

module.exports = requestHanders;

// module.exports={
//      handlers : requestHanders,
//      someText :"this is also can be work"
// }