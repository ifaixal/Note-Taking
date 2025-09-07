import { useEffect, useState } from 'react';
import './App.css'
import SideBar from './components/SideBar';
import Board from './pages/Board';


function App() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <Board></Board>
    </div>
  )
}

export default App