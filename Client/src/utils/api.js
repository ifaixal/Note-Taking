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
    const existingNote = await getNotebyTitle(newNote.title);

    if (
        (Array.isArray(existingNote) && existingNote.length > 0) ||
        (existingNote && existingNote.title)
      ) {
        throw new Error("Note with this title already exists");
    }

    const res = await fetch(`${API_URL}/notes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote)
    })

    if (!res)
        throw new Error(`Failed to fetch tags: ${res.status}`);
    return res.json();
}

export async function getNotebyTitle(title){
    const res = await fetch(`${API_URL}/notes/${title}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    if (!res)
        throw new Error(`Failed to get note by Title: ${res.status}`);
    return res.json();
}

export async function updateNote(newNote){
    const res = await fetch(`${API_URL}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote)
    })

    if (!res)
        throw new Error(`Failed to update note: ${res.status}`)
    return res.json();
}