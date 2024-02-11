const dataModule = require("../helper/update_user");

exports.updateUser = async (req, res) => {
    try {
        console.log(req.body,req.params)
        dataModule.worker(req.body,req.params,(err, result) => {
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
