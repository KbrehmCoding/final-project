const path = require('path');

module.exports = app => {
    app.get('/user/id:', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/User.js'));
    })
}