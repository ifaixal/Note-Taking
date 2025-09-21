import React, { useEffect, useState } from 'react'
import './NotesList.css'

const NotesList = ({notes, setCreate, handleNoteClick, setSelectedNote}) => {

  return (
    <div className='NotesList'>
      {/* Create New Note Button  */}
        <button className='newNotebutton' onClick={()=> {setCreate(true); setSelectedNote(null)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="white" d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z"/></svg>
            Create New Note
        </button>
        {/* Notes list Data if Notes Available display that else display You Don't have any notes yet*/}
        {notes.length > 0 ? 
        <div className="notes">
          {notes.map(note => (
            <NoteCard key={note._id} note={note} onClick={()=>handleNoteClick(note.title)}/>
          ))}
        </div>
        : <div className="notAvailable">
            <p>You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</p>
          </div>}
        
    </div>
  )
}
export default NotesList

const NoteCard = ({note, onClick}) => {

  return (
    <div className="noteCardWrapper" onClick={onClick}>
      <h2>{note.title}</h2>
      <div className="tagsnoteCard">
        {note.tags.map(tag => (
          <span key={tag} className="tagnamenoteCard">{tag}</span>
        ))}
      </div>
      <small>{new Date(note.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      })}</small>
    </div>
  )

}