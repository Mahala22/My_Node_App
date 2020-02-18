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




module.exports = {

    getNotes: getNotes,
    addNotes: addNotes,
}