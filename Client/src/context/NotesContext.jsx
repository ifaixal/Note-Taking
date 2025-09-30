import { createContext, useEffect, useState } from "react";
import { getNotes } from '../utils/api';

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  
  const [notes, setNotes] = useState([]); //GetNotes

  useEffect(() => {
    getNotes().then(setNotes);
  }, [])  //Getting Notes on first Render
  

  return (
    <NotesContext.Provider value={{ notes }}>
      {children}
    </NotesContext.Provider>
  );
}