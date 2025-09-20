import React, { useEffect, useState } from 'react'
import './NotesSection.css'
import NotesList from './NotesList'
import Editor from './Editor'
import DeleteNotes from './DeleteNotes'
import { getNotes } from '../utils/api'

const NotesSection = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes).catch(console.error);
  }, [])
    
  return (
    <div className='NotesSection'>
      <NotesList notes={notes}></NotesList>
      {notes.length > 0 && (
        <div className="EditorDeleteNotesWrapper">
          <Editor></Editor>
          <DeleteNotes></DeleteNotes>
        </div>
      )}
    </div>
  )
}

export default NotesSection
