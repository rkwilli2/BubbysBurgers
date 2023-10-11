/**
 * 
 * index.js - The main web server for the project.
 * @author Richard Williams
 * 
 */

// --------------------- Imported Libraries -------------------

const express = require(`express`);

// --------------------- Constants ----------------------------

const HOST_NAME = `localhost`;
const PORT = 8080;

const app = express();

// --------------------- Setup Responses ----------------------

// Serve static files saved in /public
app.use(express.static(`public`));

// Redirect root to /home
app.get(`/`, function (req, res) {
    res.redirect(`/home`);
});

// /home -> index.html
app.get(`/home`, function (req, res) {
    res.sendFile(__dirname + `/pages/index.html`);
});

// TODO

//app.get(`/db`, function (req, res) {
//    // Get db query from headers, ...
//    // Bind a function from dbService instead of making anonymous function from req, res
//});


// --------------------- Driver Code --------------------------

const server = app.listen(PORT, function () {
    console.log(`Listening at http://${HOST_NAME}:${PORT}`);
})