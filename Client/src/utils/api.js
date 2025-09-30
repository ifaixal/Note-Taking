import { getOrCreateUID } from './uId';

export const getNotes = async () => {
    const uid = getOrCreateUID();
    try{
        const res = await fetch('http://localhost:3000/api/notes', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': uid
            }
        })
    
        const data = await res.json();
        return data;
    }   catch(err){
        console.error("Failed to get Notes: ", err);
        return null;
    }
}

export const getArchieveNotes = async () => {
    const uid = getOrCreateUID();
    try{
        const res = await fetch('http://localhost:3000/api/notes/archievedNotes', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': uid
            }
        })
    
        const data = await res.json();
        return data;
    }   catch(err){
        console.error("Failed to get Archieved Notes: ", err);
        return null;
    }
}

export const createNote = async (newNote) => {
    newNote.user = getOrCreateUID();

    try {
        const res = await fetch('http://localhost:3000/api/notes/create', {
            method: "POST",
            body: JSON.stringify(newNote),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        const data = await res.json();
        return data;
    }   catch (err) {
        console.error("Failed to create Note", err);
        return { status: false, message: "Network error" };
    }
}

export const getNotebyId = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        return data;
    }   catch(err){
        console.error("Failed to get Notes: ", err);
        return null;
    }
}

export const deleteNote = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/notes/${id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        return data;

    }   catch(err){
        console.error("Failed to delete Note", err);
        return null;
    }
}

export const archieveNote = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/notes/archieve/${id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok)
            return null;

        const data = await res.json();
        return data;

    }   catch(err){
        console.error("Failed to archieve Note", err);
        return null;
    }
}