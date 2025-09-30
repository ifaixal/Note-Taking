import { createContext, useEffect, useState } from "react";
import { getNotes, getArchieveNotes } from '../utils/api';

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  
  const [notes, setNotes] = useState([]); //GetNotes
  const [refresh, setRefresh] = useState(false);
  const [selectedNote, setSelectedNote] = useState([]);
  const [selectedSection, setSelectedSection] = useState("All Notes");

  const changeRefresh = () => {
    setRefresh(prev => !prev);
  };

  useEffect(() => {
    if (selectedSection == "All Notes")
      getNotes().then(setNotes);
    else if (selectedSection == "Archieved Notes")
      getArchieveNotes().then(setNotes);

  }, [refresh, selectedSection])

  return (
    <NotesContext.Provider value={{ notes, changeRefresh, selectedNote, setSelectedNote, selectedSection, setSelectedSection }}>
      {children}
    </NotesContext.Provider>
  );
}