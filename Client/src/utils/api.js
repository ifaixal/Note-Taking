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