const worker = require("../helper/get_all_grocery").worker;

exports.getExistingGrocery = async (req, res) => {
    try {
        worker(req.query, (err, result) => {
            if (err.status != 200) {
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
