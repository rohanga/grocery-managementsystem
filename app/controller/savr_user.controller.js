const dataModule = require("../helper/save_user");

exports.saveUser = async (req, res) => {
    try {
        console.log("Save Data===>:",req.body)
        dataModule.worker(req.body,(err, result) => {
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
