const express = require("express");

const { callQuery } = require("./database.js");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
);

app.get('/search/:keyword', (req, res) => {

    const { keyword } = req.params;


    res.status(200).send({
        name: 'name good',
        author: 'author good',
        description: 'description good'
    })
})

callQuery();
