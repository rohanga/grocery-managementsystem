
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
var bodyParser = require('body-parser')
const router = require("./routs_config")

dotenv.config();

const app = express();
const PORT = process.env.PORT 

// Middleware
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
// Handle invalid requests
app.use(cors())
router.routesConfig(app);
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});


// Handle server-side errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});












