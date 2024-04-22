// Error need to handle correctly

/*
       type of error
       technical/network errors  -- MongoDB be server down
       Excepted errors           -- file can't be read
       Bugs and logical errors   -- employee object is used when it not exits
 

       for sync code we can use try catch block
       for Async code we can use then()--catch() block

       Direct handle error
       we can use express-middlware to handle error 

       sync code we can throw error  new Error(error);
       and async code we can return next(error);

*/

/*
      status code
      200 -- success  200 - operation successed   201 - resourse created and operation success
      300 -- redirect 301-- removed permantly
      400 -- client side error 401 - not authenticated 403- not authorised 402 - not found  422 invalid input
      500 -- serverside error   500 -serverside error


*/