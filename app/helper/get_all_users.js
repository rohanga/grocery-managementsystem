
const model = require("../model/user.model")
exports.worker = async function (callback) {

        let err = {
            status: 200,
            message: 'Success',
        };
      
        const result = await model.getALLUser()
     console.log("result=============",result)
        if (result) {
            return callback(err, result);
          } else {
            return callback(err, "Users Not Found");
          }
};
