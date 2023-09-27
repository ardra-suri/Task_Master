import {createCollectionDB} from "./indexdb";

export const getUserDataByEmail = (email) => {
    if (typeof email !== 'string' || email.trim() === '') {
        return Promise.reject(new Error('Invalid email address provided'));
    }

    const dbRequest = createCollectionDB();

    return new Promise((resolve, reject) => {
        dbRequest.onsuccess = () => {
            try {
                const db = dbRequest.result;
                const transaction = db.transaction(["user_data"], "readonly");
                const userStore = transaction.objectStore("user_data");
                const emailIndex = userStore.index("email"); // index on the "email" field
                
                const getRequest = emailIndex.get(email);
                getRequest.onsuccess = () => resolve(getRequest.result);
                getRequest.onerror = () => reject(new Error('Error fetching user data by email'));
            } catch (error) {
                reject(new Error('Error processing the request: ' + error.message));
            }
        };

        dbRequest.onerror = () => reject(new Error('Error opening the database'));
    });
};

