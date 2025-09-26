import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { getOrCreateUID } from './utils/uId';
import Home from './pages/Home';

function App() {
  const uid = getOrCreateUID();
  console.log(uid);

  return (
    <div className='AppBody'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App