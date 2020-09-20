const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customise Yargs Version
yargs.version('1.1.0')


// create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'ini body nya',
            demanOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Title: '+argv.title)
        // console.log('Bagian Body: '+argv.body)
        notes.addNote(argv.title, argv.body)
    }
})


// Remove command

yargs.command({
    command: 'remove',
    describe: 'remove a Note',
    builder:{
            title:{
                describe:'Note Title',
                demanOption: true,
                type: 'string'
            }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// List command

yargs.command({
    command: 'list',
    describe: 'list a Note',
    handler(){
        console.log(chalk.red.inverse('List Note'))
        notes.listNotes()    
    }
})

// Read command

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title: {
            describe : 'Note Title',
            demanOption : true,
            type: 'string',
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

// add, remove, read, list


yargs.parse()
// console.log(yargs.argv) 