const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'library',
    connectionLimit: 10
})

// search query that checks name, author, and description for what the user is trying to search with the keyword
async function searchQuery(keyword) {
    return new Promise((resolve, reject)=> {
        pool.query("select * from books WHERE MATCH(name, author, description) AGAINST (?)",[keyword], (err, result, fields) =>{
            if (err) {
                console.error(err);
                reject(err);
            }
            
            console.log("Book names searched: ")
            for(const book of result){
                console.log(book.name)
            }
        
            resolve(result)
        })
    })
}

module.exports = { searchQuery };

