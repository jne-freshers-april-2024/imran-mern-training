const express = require('express');
const commentsRoutes = require('../Module09DynamicRoutesAndAdvanceModel/routes/comments');
const app = express();

app.use('/comments',commentsRoutes);




app.listen(3000,()=>{
    console.log("express is listening on port 3000");
})