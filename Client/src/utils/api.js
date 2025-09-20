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