import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../components/Header'
import SideBar from '../components/Sidebar'
import NoteList from '../components/NoteList'
import Editor from '../components/Editor'
import ButtonsActions from '../components/ButtonsActions'
import HeaderMob from '../components/Mobile Components/HeaderMob'
import HomeMob from '../components/Mobile Components/HomeMob'
import Footer from '../components/Mobile Components/Footer'
import useNotes from '../hooks/useNotes';
import SearchMob from '../components/Mobile Components/SearchMob';
import ArchieveMob from '../components/Mobile Components/ArchieveMob';
import Tags from '../components/Mobile Components/Tags';
import ButtonCreate from '../components/Mobile Components/ButtonCreate';
import CreateNote from '../components/Mobile Components/CreateNote';

const Home = () => {
  let breakpoint = 769;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  const { currentLinkMob } = useNotes();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  if (isMobile) {
    return(
      <div className="MobileInterface">
        <HeaderMob></HeaderMob>
        { 
          currentLinkMob==="Home" ? <HomeMob /> : 
          currentLinkMob === "Search" ? <SearchMob /> : 
          currentLinkMob === "Archieve" ? <ArchieveMob /> : 
          currentLinkMob === "Create" ? <CreateNote /> :
          <Tags />
        }
        { currentLinkMob != "Create" ? <ButtonCreate /> : "" }
        <Footer />
      </div>
    );
  }

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