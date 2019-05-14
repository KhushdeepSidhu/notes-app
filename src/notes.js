import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Check for existing saved data in local storage
const loadNotes = () => {

    const notesJSON = localStorage.getItem ( 'notes' )

    try {
       return  notesJSON ? JSON.parse ( notesJSON  ) : []
    } catch ( e ) {
        return []
    }
    
}

// Create a note
const createNote = () =>{
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    const note = {
        id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    }
    notes.push ( note )
    saveNotes()

    return id
}

// Save notes 
const saveNotes = () => {
    const notesJSON = JSON.stringify ( notes )
    localStorage.setItem ( 'notes', notesJSON )
}

// remove a note from the list
const removeNote = ( noteId ) => {
    const index = notes.findIndex ( ( note ) => note.id === noteId )
    if ( index > -1 ) {
        notes.splice ( index, 1 )
        saveNotes()
    }    
}

// Sort notes by one of the selected ways
const sortNotes = ( sortBy ) => {

    if ( sortBy === 'byEdited' ) {
        return notes.sort ( ( a, b ) => {
            if ( a.updatedAt < b.updatedAt ) {
                return 1
            } else if ( a.updatedAt > b.updatedAt ) {
                return -1
            } else {
                return 0
            }
        } )
    } else if ( sortBy === 'byCreated' ) {
        return notes.sort ( ( a, b ) => {
            if ( a.createdAt < b.createdAt ) {
                return 1
            } else if ( a.createdAt > b.createdAt ) {
                return -1
            } else {
                return 0
            }
        } )
    } else if ( sortBy = 'alphabetical' ) {
        return notes.sort ( ( a, b ) => {
            if ( a.title.toLowerCase() < b.title.toLowerCase() ) {
                return -1
            } else if ( b.title.toLowerCase() < a.title.toLowerCase() ) {
                return 1
            } else {
                return 0
            }
        } )
    } else {
        return notes
    }
    
}

const updateNote = ( noteId, updates ) => {

    const note = notes.find ( ( note ) => note.id === noteId  )

    if ( !note ) {
        return
    }

    if ( typeof updates.title === 'string' )  {
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if ( typeof updates.body === 'string' ) {
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes ()

    return note.updatedAt

}

notes = loadNotes()

// get saved notes
const getNotes = () => notes

export { getNotes, createNote, removeNote, sortNotes, updateNote }