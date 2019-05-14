import moment from 'moment'
import { getNotes, sortNotes } from './notes'
import { getFilters } from './filters'

// Add each note to the dom as a paragraph
const renderNotes = () => {

    const notesEl = document.querySelector ( '.notes' )

    const notes = getNotes ()
    const filters = getFilters ()

    sortNotes ( filters.sortBy )

    const filteredNotes = notes.filter ( ( note ) => {
        const isTitleMatch = note.title.toLowerCase().includes ( filters.searchText.toLowerCase() )
        const isBodyMatch = note.body.toLowerCase().includes ( filters.searchText.toLowerCase() )     
        return isTitleMatch || isBodyMatch    
    } )

    notesEl.innerHTML = ''

    if ( filteredNotes.length > 0 ) {
        let noteEl
        filteredNotes.forEach ( ( note ) => {
            noteEl = generateNoteDOM ( note )
            notesEl.appendChild ( noteEl )
        } )
    } else {
        const emptyMessage = document.createElement ( 'p' )
        emptyMessage.classList.add ( 'empty-message' )
        emptyMessage.textContent = 'No messages to show'
        notesEl.appendChild ( emptyMessage )
    }
    
    
}

// Generate DOM structure for a single note
const generateNoteDOM = ( note ) => {

    const noteEl = document.createElement ( 'a' )
    noteEl.classList.add ( 'list-item' )

    // Status Element
    const statusEl = document.createElement ( 'p' )
    statusEl.classList.add ( 'list-item__subtitle' )
    statusEl.textContent = generateLastEditedText ( note.updatedAt )
    
    // Setup the text content and link to the edit page for a note
    const textEl = document.createElement ( 'p' )
    textEl.classList.add ( 'list-item__title' )
    textEl.textContent = note.title === '' ? 'Unnamed Note' : note.title
    
    noteEl.appendChild ( textEl )
    noteEl.appendChild ( statusEl )
    noteEl.setAttribute ( 'href', `/edit.html#${note.id}` )

    return noteEl

}

// generate Last edited message
const generateLastEditedText = ( updatedAt ) => {
    return `Last edited ${moment ( updatedAt ).fromNow()}`
}

// Initialize Edit Page 
const initializeEditPage = ( noteId ) => {

    const notes = getNotes()
    const note = notes.find ( ( note ) => note.id === noteId  )

    if ( !note  ) {
        location.assign( '/index.html' )
    }

    const titleEl = document.querySelector( '#note-title' )
    const bodyEl = document.querySelector( '#note-body' )
    const timeStampEl = document.querySelector ( '#time-stamp' )
    
    // Setup input event for titleEl
    titleEl.value = note.title
    
    // Setup input event for text area bodyEl
    bodyEl.value = note.body

    // Setup the date element
    timeStampEl.textContent = generateLastEditedText( note.updatedAt )

}

export { renderNotes, generateNoteDOM, generateLastEditedText, initializeEditPage }