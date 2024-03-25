
viewGroceryItemsController = require("./app/controller/get_all_grocery.controller")
addGroceryItemController = require("./app/controller/add_grocery_item.controller")
updateGroceryController = require("./app/controller/update_item.controller")
orderController = require("./app/controller/order.controller")
inventoryrontroller = require("./app/controller/manage_inventory.controller")


deleteUserController = require("./app/controller/remove_grocery_item.controller")


exports.routesConfig = (app) => {

    app.get('/grocery-items',
    viewGroceryItemsController.getExistingGrocery
    )    
    app.post('/grocery-items',
    addGroceryItemController.addGroceryItem
    )
    app.patch('/grocery-items/user/:userId/item/:itemId',
    updateGroceryController.updateItem
    )
    app.patch('/manage-grocery-items',
    inventoryrontroller.manageInventory
    )
    app.delete('/grocery-items/user/:userId/item/:itemId',
    deleteUserController.removeGroceryItem
    )
    app.post('/place-order',
    orderController.order
    )
    
}
