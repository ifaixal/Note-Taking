import React, { useEffect, useState } from 'react'
import './NotesSection.css'
import NotesList from './NotesList'
import Editor from './Editor'
import DeleteNotes from './DeleteNotes'
import { getNotes } from '../utils/api'

const NotesSection = ({create, setCreate, refresh, triggerRefresh}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes).catch(console.error);
  }, [refresh])
    
  return (
    <div className='NotesSection'>
      <NotesList notes={notes} setCreate={setCreate}></NotesList>
      {(notes.length > 0 || create) && (
        <div className="EditorDeleteNotesWrapper">
          <Editor triggerRefresh={triggerRefresh}></Editor>
          <DeleteNotes></DeleteNotes>
        </div>
      )}
    </div>
  )
}

export default NotesSection
