import React, { useState } from 'react'
import './MobileNotes.css'

const MobileNotes = () => {
    const [selectedType, setSelectedType] = useState("Settings")

  return (
    <div className='MobileNotes'>
        {selectedType === "Home" ? (
            <div className='Home'>
                <h1>All Notes</h1>
                {/* If empty Notes List Display You don't have */}
                <div className="Unavailable">
                    <span>
                    You don't have any notes yet. <span style={{textDecoration: 'underline', cursor: 'pointer'}}>Start a new note</span> to capture your thoughts and ideas.
                    </span>
                </div>
            </div>
            ) : selectedType === "Search" ? (
            <div className="Search">
                <h1>Search</h1>
                <div className="searchWrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#0E121B" fillRule="evenodd" d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z" clipRule="evenodd"/><path fill="#0E121B" fillRule="evenodd" d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z" clipRule="evenodd"/></svg>
                    <input type="text" name="" id="" placeholder='Search by title, content or tags...'/>
                </div>
                {/* If empty Notes List Display You don't have else will show the notes.*/}
                <div className="Unavailable">
                    <span>
                        No notes match your search. Try a different keyword or <span style={{textDecoration: 'underline', cursor: 'pointer'}}>create a new note.</span>
                    </span>
                </div>
            </div>
            ) : selectedType === "Archieved" ? (
            <div className="Archieved">
                <h1>Archieved Notes</h1>
                <p>All your archieved notes are stored here. You can restore or delete them anytime.</p>
                {/* If empty Notes List Display You don't have else will show the notes.*/}
                <div className="Unavailable">
                    <span>
                        You don't have any notes yet. <span style={{textDecoration: 'underline', cursor: 'pointer'}}>Start a new note</span> to capture your thoughts and ideas.
                    </span>
                </div>
            </div>
            ) : selectedType === "Tags" ? (
            <div className="Tags">
                <h1>Tags</h1>
                {/* If empty Notes List Display You don't have else will show the notes.*/}
                <div className="Unavailable">
                    <span>
                        You don't have any tags yet. <span style={{textDecoration: 'underline', cursor: 'pointer'}}>Start a new note</span>.
                    </span>
                </div>
            </div>
            ) : 
            <div className="Settings">
                <h1>Settings</h1>
                <div className="settingsforThemePassword">
                    <div className="Theme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z" clipRule="evenodd"/></svg>
                        <span>Color Theme</span>
                    </div>

                    <div className="Password">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z" clipRule="evenodd"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11.862 14.203v2.22"/></svg>
                        <span>Change Password</span>
                    </div>
                </div>
                <div className="logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"/></svg>
                    <span>Logout</span>
                </div>
            </div>
        }
  </div>
  )
}

export default MobileNotes