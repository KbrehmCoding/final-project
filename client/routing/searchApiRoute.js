const path = require('path');

app.get('/api/search', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/farmerSearch.js'));
})
