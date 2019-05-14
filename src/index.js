import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

// Create Note button configuration
document.querySelector ( '#create-note' ).addEventListener ( 'click', () => {
    const id = createNote ()
    location.assign ( `/edit.html#${id}` )
} )

// Text input configuration 
document.querySelector ( '#search-text' ).addEventListener ( 'input', ( event ) => {
    setFilters ( {
        searchText: event.target.value
    } )
    renderNotes ()
} )

// dropdown configuration
document.querySelector ( '#filter-by' ).addEventListener ( 'change', ( event ) => {
    setFilters ( {
        sortBy: event.target.value
    } )
    renderNotes ()
} )

// Sync data across pages
window.addEventListener ( 'storage', ( event ) => {
    if ( event.key === 'notes' ) {
        renderNotes ()
    }
} )

renderNotes ()