import './HomeMob.css'
import React from 'react'

const HomeMob = () => {
  const notes = [];

  return (
    <div className="HomeMob">
        <h1 className='HeadingSection'>All Notes</h1>
        {notes.length === 0 ? 
        <div className="unavailable">
          <p className='notAvailablePara'>You don't have any notes yet. Start a new note to capture your thoughts and ideas.</p>
        </div>
        : 
        <div>
        </div>}
    </div>
  )
}

export default HomeMob