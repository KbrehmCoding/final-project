const path = require('path');

app.get('/user/id:', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/User.js'));
})