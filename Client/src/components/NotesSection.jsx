import React from 'react'
import './NotesSection.css'
import NotesList from './NotesList'
import Editor from './Editor'
import DeleteNotes from './DeleteNotes'


const NotesSection = () => {
    
  return (
    <div className='NotesSection'>
      <NotesList></NotesList>
      <Editor></Editor>
      <DeleteNotes></DeleteNotes>
    </div>
  )
}

export default NotesSection
