
const { v4: uuidv4 } = require('uuid');
const model = require('../model/grocery.model')



exports.worker = async function (data, callback) {

    let err = {
        status: 200,
        message: 'Success',
    };
    try {
        if (!data.name) {
            err.status = 400;
            err.message = "Input parameter name is missing";
            return callback(err, null);

        }
        if (!data.userId) {
            err.status = 400;
            err.message = "Input parameter userId is missing";
            return callback(err, null);

        }
        if (!data.price) {
            err.status = 400;
            err.message = "Input price is missing";
            return callback(err, null);

        }
        if (!data.quantity) {
            err.status = 400;
            err.message = "Input quantity is missing";
            return callback(err, null);

        }
        const groceryItem = {
            user_id: data.userId,
            item_id: uuidv4(),
            price: data.price,
            name: data.name,
            quantity: data.quantity
        };
        const result = await model.saveGroceryItem(groceryItem)
        if (!result) {
            err.status = 400;
            err.message = "Error While Storing Data";
            return callback(err, null);

        }
        return callback(err, "Success")
    }
    catch (error) {

        err.status = 500;
        err.message = 'Internal server error';
        return callback(err, null);
    }
}
