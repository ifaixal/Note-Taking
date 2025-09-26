import { createContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={{ notes }}>
      {children}
    </NotesContext.Provider>
  );
}
