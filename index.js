const express = require("express");

const { searchQuery } = require("./database.js");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
);

app.get('/search/:keyword', async (req, res) => {

    const { keyword } = req.params;

    const result = await searchQuery(keyword);

    console.log("result = " + result);

    res.status(200).send(result)
})

