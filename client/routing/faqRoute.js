const path = require('path');

app.get('/faq', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/faq.js'));
})