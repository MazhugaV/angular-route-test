 var path = require("path");

 module.exports = {
    context: path.join(__dirname, "src"),
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },

    watch: true
}