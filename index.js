var express = require('express'),
        api = require('./api'),
        users = require('./accounts'),
        app = express();
app.set('port', (process.env.PORT || 5000));
app
        .use(express.static(__dirname + '/public'))
        .use(users)
        .use('/api', api)
        .get('*', function (req, res) {
            if (!req.user) {
                res.redirect('/login');
            } else {
                res.sendfile('public/main.html');
            }
        })

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});
