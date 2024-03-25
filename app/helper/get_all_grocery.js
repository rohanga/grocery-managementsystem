
const model = require("../model/grocery.model")
exports.worker = async function (data, callback) {

  let err = {
    status: 200,
    message: 'Success',
  };
  try {
    console.log("data========>", data)
    if (!data.userId) {
      err.status = 400;
      err.message = "Input parameter userId is missing";
      return callback(err, null);

    }
    let query = {
      user_id: data.userId
    }

    const result = await model.getExistingGrocery(query)
    console.log("######################>", result)
    if (result) {
      return callback(err, result);
    } else {
      return callback(err, "Users Not Found");
    }
  }
  catch (error) {
    err.status = 500;
    err.message = 'Internal server error';
    return callback(err, null);
  }
};
