const path = require('path');


app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/pages/Contact.js'));
})
