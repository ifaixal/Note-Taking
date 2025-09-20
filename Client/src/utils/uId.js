export function getOrCreateUID(){
    let uid = localStorage.getItem("uid");
    if (!uid) {
        uid = crypto.randomUUID();
        localStorage.setItem("uid", uid);
    }
    return uid;
}