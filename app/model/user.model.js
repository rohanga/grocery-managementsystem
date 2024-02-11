const dbConnect = require("../../connection")


exports.getUser = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("userData");
            const result = userModel.findOne(query)
            resolve(result)

        } catch (error) {
            reject(error);
        }
    });
}; 

exports.getALLUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("userData");
            const result = await userModel.find({}).toArray()
            resolve(result)
          
          

        } catch (error) {
            reject(error);
        }
    });
};

exports.updateUser = (query, setData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("userData");
            
            const result = await userModel.updateOne(query, {
                $set: setData
            })
            resolve(result)
        } catch (e) {
            
            reject(e);
        }
    });
};
exports.deleteUser = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("userData");
            const result =userModel.deleteOne(query)
                    
                resolve(result);
            
        } catch (error) {
            reject(error);
        }
    });
};
exports.saveUser = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userModel = await dbConnect("userData");
            const result = userModel.insertOne(query)

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

