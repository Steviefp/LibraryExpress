const express = require("express");
var cors = require('cors');

const { searchQuery } = require("./database.js");
const app = express();
const PORT = 8080;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json());


app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
);

app.get('/search/:keyword', async (req, res) => {
    const { keyword } = req.params;
    const result = await searchQuery(keyword);

    res.status(200).send(result)
})

