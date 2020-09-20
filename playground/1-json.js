const fs = require('fs')
// const book = {
//     title : 'Mejalani Hal BAru',
//     author : 'Haris Lukman'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJSON)

// console.log(bookJSON)
// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// // Manggil File
// // binary data
// const dataBuffer = fs.readFileSync('1-json.json')
// // ubah ke string
// const dataJSON = dataBuffer.toString()
// // di ektrak atau parse
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Haris'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)