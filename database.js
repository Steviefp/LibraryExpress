const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'library',
    connectionLimit: 10
})

async function searchQuery(keyword) {
    return new Promise((resolve, reject)=> {
        pool.query("select * from books WHERE MATCH(name, author, description) AGAINST (?)",[keyword], (err, result, fields) =>{
            if (err) {
                console.error(err);
                reject(err);
            }
            console.log(result)
            resolve(result)
        })
    })
}

module.exports = { searchQuery };

