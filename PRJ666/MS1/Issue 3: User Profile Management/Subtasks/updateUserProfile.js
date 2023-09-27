import {createCollectionDB} from "./indexdb";

export const gettingUpdateUserInfo = (email, updatedFields) => {
    const dbRequest = createCollectionDB();

    dbRequest.onsuccess = async () => {
        const db = dbRequest.result;
        const transaction = db.transaction(["user_data"], "readwrite");
        const userStore = transaction.objectStore("user_data");
        const emailIndex = userStore.index("email"); // Create an index for the "email" field
        const getRequest = emailIndex.get(email);// Use the index to get the user data by email
        getRequest.onsuccess = () => {
            const user = getRequest.result;
            console.log(user);

            if (user) {
                // Update the user fields with new values
                user.name = updatedFields.name || user.name;
                user.title = updatedFields.title || user.title;
                user.description =
                    updatedFields.description || user.description;

                userStore.put(user); // Update the user record in the database
            } else {
                console.log("User not found.");
            }
        };
        getRequest.onerror = () => {
            console.log("Error fetching user data by email");
        };
    };

    dbRequest.onerror = () => {
        console.log("Error opening the database");
    };
};
