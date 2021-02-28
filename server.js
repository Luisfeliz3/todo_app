const express = require("express");//Default
const app = express();//Default
app.use(express.json());//Default
const PORT = 5000;

const routes = require("./routes");//Default
// const bodyParser = require("body-parser");
// app.use(bodyParser.json({limit:"30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
// app.use(express.urlencoded({ extended: true }));//Default
app.use(routes);//Default
// const logger = require("morgan");
// app.use(logger("dev"));

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});