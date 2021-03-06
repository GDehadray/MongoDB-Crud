let express= require("express");
let bodyparser = require("body-parser");
let cors = require("cors");

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("./delete",require("./delete/delete"));

app.listen(8080);
console.log("Server is listening the port no.8080");

