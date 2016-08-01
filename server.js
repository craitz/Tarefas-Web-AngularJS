var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));	
app.listen(3000);


    // // application -------------------------------------------------------------
    // app.get('*', function(req, res) {
    //     res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });
    