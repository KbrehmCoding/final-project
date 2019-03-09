const path = require('path');

module.exports = app => {
    app.get('/farmer/id:', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/Farmer.js'));
    })
}