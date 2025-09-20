export function getOrCreateUID() {
    try {
        let uid = localStorage?.getItem("uid");
        if (!uid) {
            if (crypto?.randomUUID) {
                uid = crypto.randomUUID();
            } else {
                // To support Outdated Broswers as well
                // simple fallback
                uid = Math.random().toString(36).slice(2) + Date.now().toString(36);
            }
            localStorage?.setItem("uid", uid);
        }
        return uid;
    } catch (err) {
        // final fallback if storage is blocked
        return Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
}
