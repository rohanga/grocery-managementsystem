const dbConnect = require("../../connection")


exports.getItem = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("grocerydata");
            const result = userModel.findOne(query)
            resolve(result)

        } catch (error) {
            reject(error);
        }
    });
}; 

exports.getExistingGrocery= (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("query&&&&&&&&&&&",query)
            let model = await dbConnect("grocerydata");
            const result = await model.find(query).toArray();
            console.log(result)
            resolve(result)

        } catch (error) {
            reject(error);
        }
    });
};

exports.updateItem = (query, setData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("grocerydata");
            
            const result = await userModel.updateOne(query, {
                $set: setData
            })
            resolve(result)
        } catch (e) {
            
            reject(e);
        }
    });
};
exports.removeItem = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("grocerydata");
            const result =userModel.deleteOne(query)
                    
                resolve(result);
            
        } catch (error) {
            reject(error);
        }
    });
};
exports.saveGroceryItem = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let model = await dbConnect("grocerydata");
            const result = model.insertOne(query)

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

