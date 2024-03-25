
const model = require("../model/grocery.model")
exports.worker = async function (data, params, callback) {

    let err = {
        status: 200,
        message: 'Success',
    };
    try {
        console.log(params)
        if (!params.userId) {
            err.status = 400;
            err.message = "Input parameter userId is missing";
            return callback(err, null);

        }
        if (!params.itemId) {
            err.status = 400;
            err.message = "Input parameter item id is missing";
            return callback(err, null);

        }
        let query = {
            user_id: params.userId,
            item_id: params.itemId
        }
        const getResult = await model.getItem(query)

        if (getResult) {
            let putData = {


            }
            if (data.name) {
                putData["name"] = data.name
            }
            if (data.price) {
                putData["price"] = data.price
            }
            if (data.quantity) {
                putData["quantity"] = data.quantity
            }



            console.log("###############", query, putData);
            const result = model.updateItem(query, putData)
            return callback(err, "Success");
        } else {
            err.status = 400;
            err.message = "No user present";
            return callback(err, null);

        }
    }
    catch (error) {
        err.status = 500;
        err.message = 'Internal server error';
        return callback(err, null);
    }

} 