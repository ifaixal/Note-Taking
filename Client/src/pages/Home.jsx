import React from 'react'
import './Home.css'
import Header from '../components/Header'
import SideBar from '../components/Sidebar'
import NoteList from '../components/NoteList'
import Editor from '../components/Editor'
import ButtonsActions from '../components/ButtonsActions'

const Home = () => {
  return (
    <div className='HomeWrapper'>
        <SideBar></SideBar>
        <div className="right-side">
            <Header></Header>
            <div className="homeSection">
                <NoteList></NoteList>
                <Editor></Editor>
                <ButtonsActions></ButtonsActions>
            </div>
        </div>
    </div>
  )
}

export default Home