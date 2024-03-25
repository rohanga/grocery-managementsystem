const dbConnect = require("../../connection")


exports.getItem = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("inventorydata");
            const result = userModel.findOne(query)
            resolve(result)

        } catch (error) {
            reject(error);
        }
    });
}; 

exports.updateItem = (query, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("inventorydata");
            
            const result = await userModel.updateOne(query, {
                $inc: {quantity: data.quantity}
            })
            resolve(result)
        } catch (e) {
            
            reject(e);
        }
    });
};
exports.saveItem = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let model = await dbConnect("inventorydata");
            const result = model.insertOne(query)

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

