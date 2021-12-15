const express = require("express");
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

let port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', urlencodedParser, (req, res) => {
    console.log('Form Body: ', req.body);
    var sum = Number(req.body.num1) + Number(req.body.num2);

    //res.send(String(req.body.label1));
    res.bodylabel1 = String(sum);
    res.write(req.body.bodylabel1) = String(sum);
    alert
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});