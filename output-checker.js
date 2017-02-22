var fs = require("fs");
var app = require("./app.js");

app.handler({
  markup: fs.readFileSync("./example-code/8-in.js", "utf8")
}, {
  succeed: function(result) {
    console.log(result.markup);
  }
});

