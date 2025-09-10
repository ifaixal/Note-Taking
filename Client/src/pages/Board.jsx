import React, { useEffect, useState } from 'react'
import './Board.css'
import SideBar from '../components/SideBar'
import Topbar from '../components/Topbar'
import NotesSection from '../components/NotesSection'
import Mobile from '../components/Mobile'

const Board = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    isLarge ? (
      <div className='Board'>
        <SideBar></SideBar>
        <div className="Topbar-NotesSection">
          <Topbar></Topbar>
          <NotesSection></NotesSection>
        </div>
      </div>)
    : (
      <Mobile/>
    )
  )
}

export default Board