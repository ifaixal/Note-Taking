import React, { useEffect, useState } from 'react'
import './Board.css'
import SideBar from '../components/SideBar'
import Topbar from '../components/Topbar'
import NotesSection from '../components/NotesSection'
import Mobile from '../components/Mobile'

const Board = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);
  const [sectionSelected, setSectionSelected] = useState('AllNotes');
  const [create, setCreate] = useState(false);
  const [refresh, setRefresh] = useState(false); // NEW

  const triggerRefresh = () => setRefresh(prev => !prev); // toggle

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [create]);

  
  return (
    isLarge ? (
      <div className='Board'>
        <SideBar 
          sectionSelected={sectionSelected} 
          setSectionSelected={setSectionSelected}
          refresh={refresh}>
        </SideBar>
        
        <div className="Topbar-NotesSection">
          <Topbar sectionSelected={sectionSelected}></Topbar>

          <NotesSection
            sectionSelected={sectionSelected} 
            setSectionSelected={setSectionSelected}
            create={create}
            setCreate={setCreate}
            refresh={refresh}
            triggerRefresh={triggerRefresh}>
          </NotesSection>
        </div>
      </div>)
    : (
      <Mobile/>
    )
  )
}

export default Board