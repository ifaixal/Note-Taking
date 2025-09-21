import { getOrCreateUID } from "./uId";

const API_URL = import.meta.env.VITE_API_URL;

export async function getTags(){
    const uid = getOrCreateUID();

    const res = await fetch(`${API_URL}/notes/tags`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-user-id": uid
        }
    })

    if (!res)
        throw new Error(`Failed to fetch tags: ${res.status}`);
    return res.json();
}

export async function getNotes(){
    const uid = getOrCreateUID();

    const res = await fetch(`${API_URL}/notes/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-user-id": uid
        }
    })

    if (!res)
        throw new Error(`Failed to fetch tags: ${res.status}`);
    return res.json();
}

export async function createNote(newNote){
    const res = await fetch(`${API_URL}/notes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote)
    })

    if (!res)
        throw new Error(`Failed to fetch tags: ${res.status}`);
    return res.json();
}

export async function getNotebyID(id){
    const res = await fetch(`${API_URL}/notes/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })

    if (!res.ok)
        throw new Error(`Failed to fetch note by id: ${res.status}`)
    
    return res.json();
}

export async function updateNote(note){
    console.log(note);
    const res = await fetch(`${API_URL}/notes/edit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    })

    if (!res.ok)
        throw new Error(`Failed to update note: ${res.status}`)
    return res.json();
}