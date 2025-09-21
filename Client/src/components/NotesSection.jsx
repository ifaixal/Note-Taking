import React, { useEffect, useState } from 'react'
import './NotesSection.css'
import NotesList from './NotesList'
import Editor from './Editor'
import DeleteNotes from './DeleteNotes'
import { getNotebyID, getNotes } from '../utils/api'

const NotesSection = ({create, setCreate, refresh, triggerRefresh}) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    getNotes().then(setNotes).catch(console.error);
  }, [refresh])

  const handleNoteClick = async (id) => {
    try {
      console.log(id);
      const note = await getNotebyID(id);
      setSelectedNote(note);
      setCreate(true); // open editor when a note is clicked
    } catch (err) {
      console.error(err);
    }
  };
    
  return (
    <div className='NotesSection'>
      <NotesList 
        notes={notes} 
        setCreate={setCreate}
        setSelectedNote={setSelectedNote}
        handleNoteClick={handleNoteClick}></NotesList>
      {(notes.length > 0 || create) && (
        <div className="EditorDeleteNotesWrapper">
          <Editor 
            triggerRefresh={triggerRefresh}
            selectedNote={selectedNote}></Editor>
          <DeleteNotes></DeleteNotes>
        </div>
      )}
    </div>
  )
}

export default NotesSection
