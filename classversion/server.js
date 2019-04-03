// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("app listening on port " + PORT);
});
