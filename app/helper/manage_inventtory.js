
const model = require("../model/inventory.model")
const { v4: uuidv4 } = require('uuid');

exports.worker = async function (data, callback) {

    let err = {
        status: 200,
        message: 'Success',
    };
    try {

        // {
        //     "itemName": "Organic Apples",
        //     "sku": "APP-12345",
        //     "quantity": 100,
        //     "location": "Warehouse A, Shelf 2"
        //    }

        if (data.stockId) {
            let query = {
                stock_id: data.stockId
            }
            const getResult = await model.getItem(query)
            console.log("getResult==>", getResult)
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
                    let quant = getResult.quantity + data.quantity
                    if (getResult.quantity > 0 && quant > 0) {
                        putData["quantity"] = data.quantity

                    } else {
                        err.status = 500;
                        err.message = 'change quantity limit';
                        return callback(err, null);
                    }
                }


                let query1 = {
                    stock_id: data.stockId
                }
                console.log("###############", query1, putData);
                const result = model.updateItem(query1, putData)
                console.log("###############WW", result);

                return callback(err, result);
            }
            err.status = 500;
            err.message = 'error while updating data';
            return callback(err, null);
        } else {

            const groceryItem = {
                stock_id: uuidv4(),
            };
            if (data.name) {
                groceryItem["name"] = data.name
            }
            if (data.price) {
                groceryItem["price"] = data.price
            }
            if (data.quantity) {
                groceryItem["quantity"] = data.quantity
            }

            const result = await model.saveItem(groceryItem)
            if (!result) {
                err.status = 400;
                err.message = "Error While Storing Data";
                return callback(err, null);

            }
            return callback(err, result);

        }
    }
    catch (error) {
        err.status = 500;
        err.message = 'Internal server error';
        return callback(err, null);
    }
} 