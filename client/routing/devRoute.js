const path = require('path');

app.get('/Dev', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/Dev.js'));
})