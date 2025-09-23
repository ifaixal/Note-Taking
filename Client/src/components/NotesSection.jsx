import React, { useEffect, useState } from 'react'
import './NotesSection.css'
import NotesList from './NotesList'
import Editor from './Editor'
import DeleteNotes from './DeleteNotes'
import { getArchieveNote, getNotebyID, getNotes, getNotesbyTag } from '../utils/api'

const NotesSection = ({sectionSelected, create, setCreate, refresh, triggerRefresh, notes, setNotes}) => {
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    if (sectionSelected === 'All Notes')
      getNotes().then(setNotes).catch(console.error);
    else if (sectionSelected === 'Archieve Notes')
      getArchieveNote().then(setNotes).catch(console.error);
    else
      getNotesbyTag(sectionSelected).then(setNotes).catch(console.error);

  }, [refresh, sectionSelected])

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
        handleNoteClick={handleNoteClick}>
      </NotesList>
      
      {(notes.length > 0 || create) && (
        <div className="EditorDeleteNotesWrapper">
          <Editor 
            triggerRefresh={triggerRefresh}
            selectedNote={selectedNote}>
          </Editor>

          <DeleteNotes 
            triggerRefresh={triggerRefresh}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}>
          </DeleteNotes>
        </div>
      )}
    </div>
  )
}

export default NotesSection
