import React from 'react'
import './Header.css'
import useNotes from '../hooks/useNotes';

const Header = () => {
    const {selectedSection} = useNotes();
  return (
    <div className='Header'>
        <h1>{selectedSection}</h1>
        <div className="search-settings-wrapper">
            <div className="searchWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 24 24"><path fill="#0E121B" fillRule="evenodd" d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z" clipRule="evenodd"/><path fill="#0E121B" fillRule="evenodd" d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z" clipRule="evenodd"/></svg>
                <input type="text" placeholder='Search by title, content, or tags...'/>
            </div>

            <div className="settingswrapper">
                <svg className="settingsSVG" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" stroke='#1C274C'/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Header