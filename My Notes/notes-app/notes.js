const fs = require('fs')

const getNotes = function()   {

    console.log("your notes")

}
const loadNotes = function() {
    try{
        const databuffer = fs.readFileSync('./notes.json')
        return JSON.parse(databuffer.toString())
    }
    catch (e){
        return []
    }

}

const addNotes = function(title, body)  {

    const notes = loadNotes()
    notes.push({
        title: title,
        body: body
    })
    fs.writeFileSync('./notes.json', JSON.stringify(notes))
}

const removeNotes = function(title){
    const notes = loadNotes()
    const newNotes = notes.filter(function (note){
        return note.title !== title
    })
    // for(var i = 0; i < notes.length; i++){
    //     if( notes[i].title == title)
    //         console.log('the given title has been removed')
    //     else
    //         newNotes.push(notes[i])
    // }

    fs.writeFileSync('./notes.json', JSON.stringify(newNotes))
   

}

//removeNotes("The solomon wisdom")



module.exports = {

    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}