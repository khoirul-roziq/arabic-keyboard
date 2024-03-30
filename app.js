const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override")
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

// Routing
app.use("/", require("./routes/keyboard"));
app.use("/arabic", require("./routes/arabic"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log("MongoDB connection failded: ", err.message));
