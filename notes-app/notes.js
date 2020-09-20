const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=> {
    return 'Ini adalah percobaan Saja Apakah berhasil'
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) =>  notes.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notertoKeep = notes.filter((note)=>note.title !== title)
    // const notertoKeep = notes.filter(function(note){
    //     return note.title !== title
    // })

    if(notes.length > notertoKeep.length){

        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notertoKeep)
    }else{
        console.log(chalk.red.inverse('No Note Found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((notes)=>{
        console.log(chalk.green.inverse(notes.title))
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const searchNotes = notes.find((note) => note.title === title)

    if(searchNotes){
        console.log(chalk.green.inverse(searchNotes.title))
        console.log(searchNotes.body)
    }else{
        console.log(chalk.red.inverse('Title Not Found'))
    }
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }

}

// module.exports = getNotes

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}