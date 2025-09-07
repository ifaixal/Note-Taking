import { useEffect, useState } from 'react';
import './App.css'
import SideBar from './components/SideBar';


function App() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <SideBar></SideBar>
    </div>
  )
}

export default App