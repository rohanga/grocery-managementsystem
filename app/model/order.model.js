const dbConnect = require("../../connection")



exports.saveOrder = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let model = await dbConnect("order");
            const result = model.insertOne(query)

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

