const path = require('path');

app.get('/Home', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/Home.js'));
})