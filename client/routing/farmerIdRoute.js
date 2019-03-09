const path = require('path');

app.get('/farmer/id:', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/Farmer.js'));
})