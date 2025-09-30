import { createContext, useEffect, useState } from "react";
import { getNotes, getNotebyId } from '../utils/api';

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  
  const [notes, setNotes] = useState([]); //GetNotes
  const [refresh, setRefresh] = useState(false);
  const [selectedNote, setSelectedNote] = useState([]);

  const changeRefresh = () => {
    setRefresh(prev => !prev);
  };

  useEffect(() => {
    getNotes().then(setNotes);
  }, [refresh])

  return (
    <NotesContext.Provider value={{ notes, changeRefresh, selectedNote, setSelectedNote }}>
      {children}
    </NotesContext.Provider>
  );
}