import React, {createContext, useContext} from "react";
import {getUserDataByEmail} from "../lib/GettingUserInfo";

const LocalUserContext = createContext({});

const LocalStateContext = LocalUserContext.Provider;

const UserContextProvider = ({children}) => {
    const logout = () => {
        localStorage.removeItem("@logeIn");
        localStorage.removeItem("email");

        localStorage.removeItem("groupId");

        window.location.reload();
    };

    const UserLogin = (userCredential) => {
        getUserDataByEmail(userCredential.email)
            .then((userData) => {
                if (!userData) {
                    alert("User not register!");
                    return;
                }

                if (userData && userData.password === userCredential.password) {
                    localStorage.setItem("@logeIn", true);
                    localStorage.setItem("email", userCredential.email);

                    window.location.href = "/";
                } else {
                    alert("Something went wrong!, Check your credentials");
                }
            })
            .catch((error) => {
                alert("Something went wrong!" + error);
            });
    };

    return (
        <React.Fragment>
            <LocalStateContext value={{logout, UserLogin}}>
                {children}
            </LocalStateContext>
        </React.Fragment>
    );
};
const useUser = () => useContext(LocalUserContext);

export {UserContextProvider, useUser};
