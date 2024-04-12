class User{
      
      constructor(name,address,password){
             this.name  = name;
             this.address = address;
             this.password = password;
      }
}


const User = sequelize.define('user',
{

    name:{
       type:DataTypes.STRING 
    },
    address:{
       type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING
    }
});

module.exports = User;