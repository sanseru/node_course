const fs = require('fs')

// Membuat File dengan isi nya
fs.writeFileSync('notes.txt', 'My Name is Haris Lukman Hakim')


//Menambahkan data beserta isinya dnegan append
fs.appendFileSync('notes.txt', ' Saya Sedang belajr Pemrograma ')
