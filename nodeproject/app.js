var hello = 'hello world!!!';
console.log(hello);

var express = require("express");
var app = express();

var port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Reponse sent by node backend");
})

app.get("/routing", (req, res) => {
    res.send("Reponse of express routing");
})


app.listen(port, function(err){
    console.log("The server is running on port " + port);
})

