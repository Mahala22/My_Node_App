const validator = require('validator')
const chalk = require('chalk')
const args = require('yargs')
const notes = require('./notes.js')

args.command({

    command: 'add',
    describe: ' adds a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:false,
            type: 'string'

        },
        body:{
            describe:"Note Body",
            demandOption:false,
            type: 'string'
        }
    },
    handler : function(argv){
        notes.addNotes(argv.title, argv.body)
        //notes.getNotes()
        //console.log(argv.title + argv.body)
    }

})
args.command({

    command: 'remove',
    describe: ' removes a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:false,
            type: 'string'

        }
    },
    handler : function(argv){

        notes.removeNotes(argv.title)
    }

})
args.command({

    command: 'list',
    describe: ' list all the note',
    handler : function(){

        console.log('listed  the  note!')
    }

})
args.command({

    command: 'delete',
    describe: ' deletes a note',
    handler : function(){

        console.log('deleted  the  note!')
    }

})

args.parse()