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

const Home = () => {
  let breakpoint = 769;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  if (isMobile) {
    return(
      <div className="MobileInterface">
        <HeaderMob></HeaderMob>
        <HomeMob></HomeMob>
        <Footer></Footer>
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