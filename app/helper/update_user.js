
const model = require("../model/user.model")
exports.worker = async function (data,idData, callback) {

    let err = {
        status: 200,
        message: 'Success',
    };
    if (!idData.userId) {
        err.status = 400;
        err.message = "Input parameter userId is missing";
        return callback(err, null);

    }
    let query ={
        userid:idData.userId
    }
   const getResult = await  model.getUser(query)
   
    if(getResult){
        let putData = {
           
    
        }
        if (data.age) {
            putData["age"]= data.age            
        }
        if (data.username) {
            putData["username"]= data.username
        }
        if (data.hobbies) {
            putData["hobbies"]= getResult.hobbies.concat(data.hobbies)
        }
 
  
    let query1 = {
        userid: idData.userId
    }
    console.log("###############",query1,putData);
    const result = model.updateUser(query1, putData)
    return callback(err, "Success");
}else{
    err.status = 400;
    err.message = "No user present";
    return callback(err, null);

}

} 