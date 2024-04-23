

const http = require('http');

const server = http.createServer((req,res)=>{
     console.log("resquest : ","URL ::==>>  ",req.url);
     console.log(" methods ::==>>  ",req.method );
     console.log(" Hreader ::==>> ", req.headers)
})

server.listen(3000);


// request content data in header is this meta data 