import React from 'react'
import './Board.css'
import SideBar from '../components/SideBar'
import Topbar from '../components/Topbar'
import NotesSection from '../components/NotesSection'

const Board = () => {
  return (
    <div className='Board'>
      <SideBar></SideBar>
      <div className="Topbar-NotesSection">
        <Topbar></Topbar>
        <NotesSection></NotesSection>
      </div>
    </div>
  )
}

export default Board