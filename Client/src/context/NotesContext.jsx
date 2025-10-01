import { createContext, useEffect, useState } from "react";
import { getNotes, getArchieveNotes, getTags, getArchieveTags, getNotesbyTag } from '../utils/api';

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  
  const [notes, setNotes] = useState([]); //GetNotes
  const [refresh, setRefresh] = useState(false);
  const [selectedNote, setSelectedNote] = useState([]);
  const [selectedSection, setSelectedSection] = useState("All Notes");
  const [tagsList, setTagsList] = useState([]);

  const changeRefresh = () => {
    setRefresh(prev => !prev);
  };

  useEffect(() => {
    if (selectedSection == "All Notes"){
      getNotes().then(setNotes);
      getTags().then(setTagsList);
    }
      
    else if (selectedSection == "Archieved Notes"){
      getArchieveNotes().then(setNotes);
      getArchieveTags().then(setTagsList);
    }

    else{
      getNotesbyTag(selectedSection).then(setNotes);
      setTagsList([selectedSection]);
    }
      

  }, [refresh, selectedSection])

  return (
    <NotesContext.Provider value={{ notes, changeRefresh, selectedNote, setSelectedNote, selectedSection, setSelectedSection, tagsList }}>
      {children}
    </NotesContext.Provider>
  );
}