
const { v4: uuidv4 } = require('uuid');
const model = require('../model/user.model')



exports.worker = async function (data,callback) {

        let err = {
            status: 200,
            message: 'Success',
        };
        if(!data.username){
            err.status = 400;
            err.message = "Input parameter username is missing";
            return callback(err, null);
      
        }
        if(!data.age){
            err.status = 400;
            err.message = "Input parameter age is missing";
            return callback(err, null);
      
        }
        const newUser = {
            userid: uuidv4(),
            username:data.username,
            age:data.age,
            hobbies: data.hobbies || []
          };
        const result = await model.saveUser(newUser)
        if(!result){
            err.status = 400;
            err.message = "Error While Storing Data";
            return callback(err, null);
      
        }
        return callback(err,"Success")  
    }
