const path = require('path');

module.exports = app => {
    app.get('/Dev', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/Dev.js'));
    })
}