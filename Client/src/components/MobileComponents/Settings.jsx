import React, { useState } from 'react'
import './Settings.css'

const Settings = () => {
    const [theme, setTheme] = useState("Light");

  return (
    <div className='SettingsMenu'>
        <div className="back">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="#808080" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd"/></svg>
            <span>Settings</span>
        </div>

        <div className="titleSettings">
            <h1>Color Theme</h1>
            <p>Choose your color theme.</p>
        </div>

        <div className="themeOptions">
            <label className="lightMode" for="lightmode">
                <div className="svgText">
                    <div className="lightsvgwrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"/><path stroke="#0E121B" stroke-linecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z" clipRule="evenodd"/></svg>
                    </div>

                    <label className="descriptiontheme" for="lightmode">
                        <h1>Light Mode</h1>
                        <p>Pick a clean and classic light theme</p>
                    </label>
                </div>

                <input type="radio" name="theme" id="lightmode" />
            </label>

            <label className="darkmode">
                <div className="svgText">
                    <div className="darksvgwrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#0E121B" d="M12.614 21.723c-2.53 0-5.03-.97-6.89-2.84-1.86-1.87-2.85-4.28-2.85-6.88 0-2.6 1.01-5.04 2.85-6.88 3.05-3.06 7.82-3.73 11.59-1.63.26.15.44.48.41.78-.03.33-.25.6-.57.7-3.05.94-5.19 3.83-5.19 7.03 0 3.21 2.14 6.1 5.19 7.02.29.09.53.38.57.68.04.3-.14.65-.4.8-1.47.82-3.1 1.22-4.71 1.22Zm0-17.94c-2.14 0-4.25.83-5.83 2.4-1.58 1.57-2.41 3.62-2.41 5.82s.85 4.27 2.41 5.82c2.21 2.21 5.49 2.94 8.39 1.99-2.83-1.51-4.7-4.52-4.7-7.81s1.87-6.3 4.69-7.82c-.83-.27-1.7-.4-2.55-.4Zm3.97 1.02s.01 0 .02.01c0 0-.01 0-.02-.01ZM18.974 19.052c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06 8.179 8.179 0 0 0 2.41-5.81c0-2.19-.85-4.26-2.41-5.81a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a9.653 9.653 0 0 1 2.85 6.87c0 2.59-1.01 5.04-2.85 6.87-.15.15-.34.22-.53.22Z"/></svg>
                    </div>

                    <label className="descriptiontheme" for="darkmode">
                        <h1>Dark Mode</h1>
                        <p>Select a sleek and modern dark theme</p>
                    </label>
                </div>

                <input type="radio" name="theme" id="darkmode" />
            </label>
        </div>
        <div className="applyTheme">
            <button>Apply Changes</button>
        </div>
    </div>
  )
}

export default Settings