const fs = require('fs')
// const book = {

//     title: 'The Temple',
//     author: 'mathew riley'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('bookdata.json', bookJSON)
//console.log(bookJSON)
const data = fs.readFileSync('bookdata.json' )
const dataJSON = JSON.parse(data.toString())

dataJSON.name = "Aadarsh Mahala"
dataJSON.age = 27

fs.writeFileSync('bookdata.json', JSON.stringify(dataJSON))

