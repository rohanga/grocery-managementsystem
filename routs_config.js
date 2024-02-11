
getUserController = require("./app/controller/get_user.controller")
getAllUserController = require("./app/controller/get_all_users.controller")
saveUserController = require("./app/controller/savr_user.controller")
updateUserontroller = require("./app/controller/update_user.controller")
deleteUserController = require("./app/controller/delete_user.controller")


exports.routesConfig = (app) => {
    app.get('/api/users/:userId',
    getUserController.getUser
    )
    app.get('/api/users',
    getAllUserController.getUsers
    )
    
    app.post('/api/users',
    saveUserController.saveUser
    )
    app.patch('/api/users/:userId',
    updateUserontroller.updateUser
    )
    app.delete('/api/users/:userId',
    deleteUserController.deleteUser
    )

    
}
