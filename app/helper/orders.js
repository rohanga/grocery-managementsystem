
const { v4: uuidv4 } = require('uuid');
const model = require('../model/inventory.model')
const groceryModel = require('../model/grocery.model')

const ordermodel = require('../model/order.model')




exports.worker = async function (data, callback) {

    let err = {
        status: 200,
        message: 'Success',
    };
    try {
        if (!data.items) {
            err.status = 400;
            err.message = "Input parameter items is missing";
            return callback(err, null);
        }
        if (!data.userId) {
            err.status = 400;
            err.message = "Input parameter userId is missing";
            return callback(err, null);
        }
        for (const item of data.items) {
            let query = {
                stock_id: item.stockId
            }

            let result = model.getItem(query)


            if (result.quantity < item.quantity) {
                return res.status(400).json({ error: `Item ${item.id} is not available in the requested quantity` });
            }
            let putData = {
                quantity: - item.quantity
            }
            await model.updateItem(query, putData)
            let query1 = {
                user_id: data.userId,
                item_id: item.itemId
            }
            console.log("query1", query1)
            const result1 = await groceryModel.removeItem(query1)


        }


        const orderData = {
            order_id: uuidv4(),
            user_id: data.userId,
            items: data["items"],
            bill: data.bill
        };
        const result = await ordermodel.saveOrder(orderData)

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
