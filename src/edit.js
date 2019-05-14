import moment from 'moment'
import { removeNote, updateNote } from './notes'
import { initializeEditPage, generateLastEditedText } from './views';

const noteId = location.hash.substring(1)
const button = document.querySelector( '#remove-note' )
const titleEl = document.querySelector( '#note-title' )
const bodyEl = document.querySelector( '#note-body' )
const timeStampEl = document.querySelector ( '#time-stamp' )

initializeEditPage( noteId )

// Setup input event for a remove button
button.addEventListener ( 'click', () => {
    removeNote ( noteId )
    location.assign ( 'index.html' )
} )

// Setup input event for titleEl
titleEl.addEventListener( 'input', ( event ) => {
    const updatedAt = updateNote ( noteId, {
        title: event.target.value,
        updatedAt: moment().valueOf()
    } )
    timeStampEl.textContent = generateLastEditedText( updatedAt )
 
} )

// Setup input event for text area bodyEl
bodyEl.addEventListener( 'input', ( event ) => {
    const updatedAt = updateNote ( noteId, {
        body: event.target.value,
        updatedAt: moment().valueOf()
    } )
    timeStampEl.textContent = generateLastEditedText( updatedAt )
} )


// Synching data across pages
window.addEventListener ( 'storage', function ( event ) {

    if ( event.key === 'notes' ) {
        initializeEditPage( noteId )
    }

} )