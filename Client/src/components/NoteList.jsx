import React from 'react'
import './NoteList.css'
import useNotes from '../hooks/useNotes'
import { formatDate } from '../utils/date'

const NoteCard = ({note}) => {
    return (
        <div className='NoteCardWrapper'>
            <h3 className="noteTitle">{note.title}</h3>
            {note.tags?.length > 0 && (
                <div className="noteTags">
                    {note.tags.map((tag, index) => (
                        <span key={index} className="noteTag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <p className='noteTime'>{formatDate(note.createdAt)}</p>
        </div>
    )
}

const NoteList = () => {
    const { notes } = useNotes();

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
                    notes.map(note => <NoteCard key={note._id} note={note}/>)
                )
            }
        </div>
    </div>
  )
}

export default NoteList