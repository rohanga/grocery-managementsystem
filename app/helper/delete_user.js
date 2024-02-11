
const model = require("../model/user.model")
exports.worker = async function (data,callback) {
  
    let err = {
        status: 200,
        message: 'Success',
    };

    if (!data.userId) {
        err.status = 400;
        err.message = "Input parameter userId is missing";
        return callback(err, null);

    }
    let query={
        userid:data.userId
    }

    const result = model.deleteUser(query)
    if (result) {
        return callback(err, "Bye Bye User Deleted......");
      } else {
        return callback(err, "Issue while deleting account");
      }
   
};
