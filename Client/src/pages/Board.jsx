import React, { useEffect, useState } from 'react'
import './Board.css'
import SideBar from '../components/SideBar'
import Topbar from '../components/Topbar'
import NotesSection from '../components/NotesSection'
import Mobile from '../components/Mobile'

const Board = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);
  const [sectionSelected, setSectionSelected] = useState('AllNotes');

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    isLarge ? (
      <div className='Board'>
        <SideBar 
          sectionSelected={sectionSelected} 
          setSectionSelected={setSectionSelected}>
        </SideBar>
        
        <div className="Topbar-NotesSection">
          <Topbar></Topbar>

          <NotesSection
            sectionSelected={sectionSelected} 
            setSectionSelected={setSectionSelected}>
          </NotesSection>
        </div>
      </div>)
    : (
      <Mobile/>
    )
  )
}

export default Board