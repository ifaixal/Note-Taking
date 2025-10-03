import { createContext, useEffect, useState } from "react";
import { getNotes, getArchieveNotes, getTags, getArchieveTags, getNotesbyTag, getNotebyId } from '../utils/api';

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  
  const [notes, setNotes] = useState([]); //GetNotes
  const [refresh, setRefresh] = useState(false);
  const [selectedNote, setSelectedNote] = useState([]);
  const [selectedSection, setSelectedSection] = useState("All Notes");
  const [tagsList, setTagsList] = useState([]);
  const [currentLinkMob, setCurrentLinkMob] = useState("Create");

  const handleSelectedNote = async (id) => {
    const data = await getNotebyId(id);
    if (data)
        setSelectedNote(data);
    setCurrentLinkMob("Create");
}

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
    }

  }, [refresh, selectedSection])

  useEffect(() => {
    if (currentLinkMob === "Home")
      getNotes().then(setNotes);
    else if (currentLinkMob == "Archieve")
      getArchieveNotes().then(setNotes);
    else if (currentLinkMob == "Tags"){
      Promise.all([getTags(), getArchieveTags()])
      .then(([tags, archTags]) => {
        setTagsList([...new Set([...tags, ...archTags])]);
      });
    }


  }, [currentLinkMob, refresh])

  return (
    <NotesContext.Provider value={{ 
    notes, 
    changeRefresh, 
    selectedNote, 
    setSelectedNote, 
    selectedSection, 
    setSelectedSection, 
    tagsList, 
    currentLinkMob, 
    setCurrentLinkMob, 
    handleSelectedNote }}>
      {children}
    </NotesContext.Provider>
  );
}