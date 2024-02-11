
const model = require("../model/user.model")

exports.worker = async function (data,callback) {
    console.log("hello")
        let err = {
            status: 200,
            message: 'Success',
        };
console.log("############",data)
        if(!data.userId){
            err.status = 400;
            err.message = "Input parameter UserId is missing";
            return callback(err, null);
      
        }
        let query ={
            userid:data.userId
        }
       const result = await  model.getUser(query)
       
       

        if (result) {
            return callback(err, result);
          } else {
            return callback(err, "User Not Found");
          }
       
    
        
};
