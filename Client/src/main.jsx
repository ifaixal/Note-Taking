import { createRoot } from 'react-dom/client'
import { NotesProvider } from "./context/NotesContext.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <NotesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NotesProvider>
)
