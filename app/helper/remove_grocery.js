
const model = require("../model/grocery.model")
exports.worker = async function (data, callback) {

    let err = {
        status: 200,
        message: 'Success',
    };
    try {

        if (!data.userId) {
            err.status = 400;
            err.message = "Input parameter userId is missing";
            return callback(err, null);

        }
        if (!data.itemId) {
            err.status = 400;
            err.message = "Input parameter itemId is missing";
            return callback(err, null);

        }
        let query = {
            user_id: data.userId,
            item_id: data.itemId
        }

        const result = model.removeItem(query)
        if (result) {
            return callback(err, "Item Removed");
        } else {
            return callback(err, "Issue while Removing item");
        }
    }
    catch (error) {
        err.status = 500;
        err.message = 'Internal server error';
        return callback(err, null);
    }
};
