const path = require('path');

module.exports = app => {
    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/Contact.js'));
    })
}
