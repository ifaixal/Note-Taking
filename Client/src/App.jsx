import './App.css'
import { getOrCreateUID } from './utils/uId';


function App() {
  const uid = getOrCreateUID();
  console.log(uid);

  return (
    <div>
      
    </div>
  )
}

export default App