const path = require('path');

module.exports = app => {
    app.get('/api/search', function (req, res) {
        res.sendFile(path.join(__dirname, '../src/pages/farmerSearch.js'));
    })
}
