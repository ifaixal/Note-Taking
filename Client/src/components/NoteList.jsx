import React from 'react'
import './NoteList.css'

const NoteCard = () => {
    return (
        <div>

        </div>
    )
}

const NoteList = () => {
    const notes = [];

  return (
    <div className='NoteList'>
        <div className="buttonWrapper">
            <button className='CreateNewNote'>+ Create New Note</button>
        </div>

        <div className="notesWrapper">
            { notes.length === 0 ? 
                (
                    <div className="unavailable">
                        <p>You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</p>
                    </div>
                )
                : 
                (
                    notes.map(note => <NoteCard />)
                )
            }
        </div>
    </div>
  )
}

export default NoteList