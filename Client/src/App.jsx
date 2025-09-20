import { useEffect, useState } from 'react';
import './App.css'
import SideBar from './components/SideBar';
import Board from './pages/Board';
import { getOrCreateUID } from './utils/uId';


function App() {
  const uid = getOrCreateUID();
  console.log(uid);
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