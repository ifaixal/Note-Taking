import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Home active">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24"><path fill="#0E121B" fillRule="evenodd" d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/><path fill="#0E121B" fillRule="evenodd" d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z" clipRule="evenodd"/><path fill="#0E121B" fillRule="evenodd" d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z" clipRule="evenodd"/></svg>
        <p className='FooterHeading'>Home</p>
      </div>

      <div className="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24"><path fill="#0E121B" fillRule="evenodd" d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z" clipRule="evenodd"/><path fill="#0E121B" fillRule="evenodd" d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z" clipRule="evenodd"/></svg>
        <p className='FooterHeading'>Search</p>
      </div>

      <div className="Archieve">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"/></svg>
        <p className='FooterHeading'>Search</p>
      </div>

      <div className="Tags">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z" clipRule="evenodd"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z" clipRule="evenodd"/></svg>
        <p className='FooterHeading'>Tags</p>
      </div>

      <div className="ThemeChange">
        <svg className="settingsSVG" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" stroke='#1C274C'/>
        </svg>
        <p className='FooterHeading'>Theme</p>
      </div>
    </div>
  )
}

export default Footer