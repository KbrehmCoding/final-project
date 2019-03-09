const path = require('path');

module.exports = app => {
    app.get('/Home', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/Home.js'));
    })

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/Home.js'));
    })

}