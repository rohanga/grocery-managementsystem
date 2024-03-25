const worker = require("../helper/orders").worker;

exports.order = async (req, res) => {
    try {
        console.log("order Data===>:",req.body)
        worker(req.body,(err, result) => {
            if (err.status!=200) {
                console.error(err);
                res.status(500).send('Internal server error');
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
