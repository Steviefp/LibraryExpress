const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'library',
    connectionLimit: 10
})

function callQuery(){
    pool.query("select * from books", (err, result, fields) =>{
        if (err) {
            console.error(err);
            return;
        }

        return console.log(result);
    })
}

module.exports = { callQuery };

