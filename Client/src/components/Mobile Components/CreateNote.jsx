import useNotes from '../../hooks/useNotes'
import { createNote, deleteNote, archieveNote } from '../../utils/api'
import { formatDate } from '../../utils/date'
import './CreateNote.css'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [content, setContent] = useState("");
  const {setCurrentLinkMob, changeRefresh, selectedNote, setSelectedNote} = useNotes();

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title || "");
      setTagsInput(
        Array.isArray(selectedNote.tags) ? selectedNote.tags.join(", ") : ""
      );
      setContent(selectedNote.content || "");
    }
  }, [selectedNote]);

  const parseTags = (input) => {
    if (!input) return []
    return input
      .split(",")              // split by comma
      .map(tag => tag.trim())  // remove spaces around
      .filter(tag => tag.length > 0) // remove empties
  }

  const handleSave = async () => {

    if (title.trim() === ""){
        toast.error("Title cannot be empty", {duration: 1000});
        return;
    }

    if (tagsInput.trim() === ""){
        toast.error("Tags cannot be empty", {duration: 1000});
        return;
    }

    if (content.trim() === ""){
        toast.error("Description cannot be empty", {duration: 1000});
        return;
    }

    const tags = parseTags(tagsInput);

    const newNote = {
      title,
      content,
      tags
    }

    try{
        const data = await createNote(newNote); // ✅ already parsed
        if (data.status) {
            changeRefresh(); // ✅ trigger notes reload
            toast.success("Saved Note Successfully");
            setTitle("");
            setTagsInput("");
            setContent("");
        } else {
            toast.error(data?.message || "Failed to save note");
        }
    } catch (err){
        toast.error("Failed to save Note");
    }
  }

  const handleChange = async () => {

  }

  const handleClick = async () => {
      if (selectedNote.length===0){
          await handleSave();
      }   else{
          await handleChange();
      }
  }

  const deleteNoteInitiate = async () => {
    if (selectedNote.length===0){
      toast.error("Cannot Delete un-saved Note", {duration: 1000})
      return;
    }
    
    const id = selectedNote._id;
    const res = await deleteNote(id);
    if (!res){
      toast.error("Couldn't able to delete Note", {duration: 1000})
      return;
    }
    toast.success("Note Deleted Successfully", {duration: 1000})
    changeRefresh();
    setSelectedNote([]);
  }

  const initiateArchieve = async () => {
    if (selectedNote.length===0){
      toast.error("Cannot Archieve un-saved Note", {duration: 1000})
      return;
    }
    
    const id = selectedNote._id;
    const res = await archieveNote(id);
    if (!res){
      toast.error("Server error Archieving note", {duration: 1000})
      return;
    }
    toast.success("Note Archieved Successfully", {duration: 1000})
    changeRefresh();
    setSelectedNote([]);
  }

  return (
    <div className='CreateNoteMob'>
      <div className="goBack-cancel-save" onClick={()=> {setCurrentLinkMob("Home"); setSelectedNote([]);}}>
        <div className="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" fill="none" viewBox="0 0 24 24"><path fill="#000" fillRule="evenodd" d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z" clipRule="evenodd"/></svg>
          <p>Go Back</p>
        </div>
        <div className="cancel-save">
          {selectedNote.length != 0 ? (<div style={{alignItems: 'center', display: 'flex', gap: '0.25rem'}}>
            <svg onClick={deleteNoteInitiate} xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" fill="none" viewBox="0 0 24 25"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"/></svg>
            <svg onClick={initiateArchieve} xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.75rem" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"/></svg>
          </div>) : <div />}
          <p className='CancelPara' onClick={()=> {setCurrentLinkMob("Home"); setSelectedNote([]);}}>Cancel</p>
          <p className='SaveNotePara' onClick={handleClick}>Save Note</p>
        </div>
      </div>

      <div className="EditorMob">
        <div className="titleWrapper">
          <input type="text" placeholder='Enter a title...' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="tagsWrapper-LastEdited-Mob">
          <div className="tagsWrapperMob">
            <div className="svgHeadWrapperMob">
              <svg xmlns="http://www.w3.org/2000/svg" width="0.65rem" height="0.65rem" fill="none" viewBox="0 0 24 24"><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z" clipRule="evenodd"/><path stroke="#0E121B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z" clipRule="evenodd"/></svg>
              <p>Tags</p>
            </div>
            <div className="TagInputWrapper">
              <input type="text" className='InputTags' placeholder='Add tags separated by commas (e.g. Work, Planning)' value={tagsInput} onChange={(e) => setTagsInput(e.target.value)}/>
            </div>
          </div>

          <div className="timeWrapperMob">
            <div className="svgHeadWrapperMob">
              <svg width="0.65rem" height="0.65rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z" fill="#2B303B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z" fill="#2B303B"/>
              </svg>
              <p className='SecondDiv'>Last Edited</p>
            </div>
            <div className="TimeInputWrapper">
              {selectedNote.length === 0 ? (<p>Not yet Saved</p>) : <p>{formatDate(selectedNote.createdAt)}</p>}
            </div>
          </div>
        </div>

        <div className="TextAreaMob">
          <textarea name="" id="" placeholder='Start typing your note here...' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
      </div>
      <Toaster position='top-right'/>
    </div>
  )
}

export default CreateNote