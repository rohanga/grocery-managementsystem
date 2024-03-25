const worker = require("../helper/manage_inventtory").worker

exports.manageInventory = async (req, res) => {
    try {
        console.log(req.body,req.params)
        worker(req.body,(err, result) => {
            if (err.status!=200) {
                console.error(err);
                res.status(500).send(err);
            } else {
                res.write(JSON.stringify(result));
                res.end();
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
};
