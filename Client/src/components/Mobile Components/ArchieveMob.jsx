import React from 'react'
import './ArchieveMob.css'
import useNotes from '../../hooks/useNotes'
import { formatDate } from '../../utils/date'

const NoteCard = ({note, onClick}) => {
  return (
      <div className='NoteCardWrapperMob' onClick={() => onClick(note._id)}>
          <h3 className="noteTitleMob">{note.title}</h3>
          {note.tags?.length > 0 && (
              <div className="noteTagsMob">
                  {note.tags.map((tag, index) => (
                      <span key={index} className="noteTagMob">
                          {tag}
                      </span>
                  ))}
              </div>
          )}
          <p className='noteTimeMobile'>{formatDate(note.createdAt)}</p>
      </div>
  )
}

const ArchieveMob = () => {
  const {handleSelectedNote, notes} = useNotes();

  return (
    <div className='ArchieveMob'>
      <h1 className='HeadingSection'>Archieved Notes</h1>
        {notes.length === 0 ? 
        <div className="unavailable">
          <p className='notAvailablePara'>You don't have any notes yet. Start a new note to capture your thoughts and ideas.</p>
        </div>
        : 
          notes.map(note => <NoteCard key={note._id} note={note} onClick={handleSelectedNote}/>)
        }
    </div>
  )
}

export default ArchieveMob