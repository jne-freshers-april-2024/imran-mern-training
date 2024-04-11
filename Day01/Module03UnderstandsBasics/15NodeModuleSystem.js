
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes)

server.listen(3000,()=>{
    console.log(`server is listening on port 3000`);
});
