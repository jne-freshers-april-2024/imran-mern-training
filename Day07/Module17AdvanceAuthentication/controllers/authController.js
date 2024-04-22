const User = require('../models/userModel');



const loginPage =(req,res,next)=>{
    // console.log(req.get('Cookie').split('=')[1]);
     res.send(
    `<form class='' action='/api/auth/login/data' method='post'>
     <div class=''>
      <label for='name'>userName</label>
      <input type='text'name='name'id='name'></input>
     </div>
     <div class=''>
     <label for='password'> Password </label>
      <input type='password' name='password' id='password'></input>
     </div>
     <button class='btn' type='submit'>Login</button>
  </form>`)

}

const loginCheck =  (req,res,next)=>{
     if(req.body.name && req.body.password){
      
    const {name , password} =req.body ;
    console.log(name,password);
     User.findOne({name:name,password:password}).then(resolve=>{
        if(resolve){
            console.log(resolve);
            req.session.user = resolve;
            req.session.authorized = true;
            res.send('user is valid');
        }  
      }).catch((reject)=>{
        res.send('user is not valid');
    
      });
    
    
          
     }
}
const postLogin = (req,res,next)=>{
    // res.redirect('/');
     res.setHeader('set-cookie','loggegIn=true');
     res.send(`<h1>Login post method</h1>`)
}

const getCookies = (req,res,next)=>{
     console.log(req.cookies);
     res.send(req.cookies);
}

const deleteCookie = (req,res,next)=>{
    res.clearCookie('cookie1');
    res.send('cookie has been deleted');
}

const deleteSession = (req,res,next)=>{
    console.log(req.session);
    req.session.destroy((err)=>{
        if(err){
           res.send('error occured at the time of distroy session') 
        }else{
           res.send('session is destory')
        }
    });
   
}
const setCookie = (req,res,next)=>{
    res.cookie('newCookie','seted',{
        // maxAge :10000,
        // secure:true,
        // httpOnly:true,
        // expire:new Date('26 july 2021')
    });
    res.cookie('cookie1',"userLoggedIn");
    res.send('new cookie is seted');
}


module.exports ={
     loginPage,
     postLogin,
     setCookie,
     getCookies,
     deleteCookie,
     loginCheck,
     deleteSession
}