//Group-page.jsx

import {Search, XSquare} from "lucide-react";
import React, {useEffect, useState} from "react";
import GroupCard from "../components/GroupCard";
import ModalState from "../components/Modal";
import {createGroup} from "../lib/createGroup";
import { onDelete } from "../lib/deleteGroup";  
import { onAddMember } from "../lib/editMemberToGroup";  
import {getAllDataFromObjectStore} from "../lib/gettingGroupList";
import {useUser} from "../context/userContext";
import {searching} from "../lib/searchGroup";
import {getUserDataByEmail} from "../lib/GettingUserInfo";



export default function Group() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [groupList, setGroupList] = useState([]);
    const [groupName, setGroupName] = useState("");
    const myEmail = localStorage.getItem("email");
    const [teamEmail, setTeamEmail] = useState([myEmail]);
    const [inputValue, setInputValue] = useState("");
    const [userData, setUserData] = useState(null);
    const [notification, setNotification] = useState(null);

    const groupData = {
        userEmail: myEmail,
        name: groupName,
        teamList: teamEmail,
    };

    const {addUserToTeam} = useUser();
    const {createTeam} = useUser();

    const fetchUserData = async () => {
        try {
          const userData = await getUserDataByEmail(myEmail);
          console.log(userData);
          return userData;
        } catch (error) {
          console.error("Error fetching user data:", error);
          return null;
        }
      };
        
    useEffect(() => {
        getAllDataFromObjectStore((data) => {
            const filteredData = data.filter((item) =>
                item.teamList.includes(myEmail)
            );

            setGroupList(filteredData);
            fetchUserData().then(userData => {
                setUserData(userData);
            });
        });
    }, [groupName, search, isOpen]);

    const refreshGroupList = () => {
        getAllDataFromObjectStore((data) => {
          setGroupList(data);
        });
      };

    const handleDelete = (groupId) => {
        // Implement the delete logic
        onDelete(groupId)
            .then(() => {
        refreshGroupList(); // Refresh the group list after deletion
        })
        .catch((error) => {
            console.error("Error deleting group:", error);
        });

    };
    
    const handleAddMember = async (groupId, newMemberEmail) => {
        // Implement the logic to add a member to the group
        try {
            onAddMember(groupId);
        //   await onAddMember(groupId, newMemberEmail);
          refreshGroupList(); // Refresh the group list after adding a member
        } catch (error) {
          console.error("Error adding member to group:", error);
          // Handle error, display a message, or log it as needed
        }
    };

    const showNotification = (message) => {
        setNotification(message);
    
        // Clear notification after 3 seconds
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      };

    const handleGroupCreateSubmit = async (e) => {
        e.preventDefault();

        const userData = await fetchUserData();
        console.log(userData);
    
        if (userData && userData.role === "Team Lead") {
            createTeam(groupName).then((data)=>{
                // If the group name is unique, proceed to create the group
            createGroup(groupData);
            setIsOpen(false);
            setTeamEmail([myEmail]);
            setGroupName("");
            showNotification("Team created successfully!");
                })
                .catch((err)=>{
                console.error(err);
                Alert("Team with this title already exists!! Please select unique name");
            })
        } else {
          alert("Permission Denied. Only Team Leads can create teams.");
        }

    };

     // Handle Searching
     const handleSearch = (e) => {
        e.preventDefault();
        const res = searching(groupList, search);
        console.log(res);
        setGroupList(res);
    };

    // handle Team Name or Group name set
    const handleTeamName = (event) => {
        setGroupName(event.target.value);
        
    };

    // Handle Email added Form
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddValue = async (e) => {
        e.preventDefault();
    
        if (inputValue.trim() === "") {
            return;
        }
      
    
        try {
            const result = await addUserToTeam(inputValue);
            if (result) {
                setTeamEmail([...teamEmail, inputValue]);
            }
            setInputValue("");
        } catch (error) {
            console.error("Error adding member to group:", error);
            // Handle error, display a message, or log it as needed
        }
    };

    return (
        <>

            <div className="m-4">
                {userData && userData.role === "Team Lead" && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-pink-600 hover:bg-pink-500 transition-all ease-linear p-2 rounded text-white font-medium"
                    >
                        + Create group
                    </button>
                )}

                <div className="h-[1px] w-full bg-pink-600 mt-6"></div>

                <div className="mt-6">
                <div className="flex  items-center ">
                        <p className="text-white mr-4 text-xl font-medium">
                            List of group name -------------------
                        </p>

                        <form
                            onSubmit={handleSearch}
                            className="flex items-center"
                            action=""
                        >
                            <input
                                className="bg-transparent border rounded-l px-2 py-[8px] w-[100%] border-gray-600 outline-none focus:border-pink-500 text-white"
                                type="text"
                                name="search"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search Group Name"
                            />
                            <button
                                type="submit"
                                className="bg-pink-500 text-white py-2 px-2 rounded-r flex transition-all ease-linear hover:bg-pink-500/80 justify-center items-center space-x-1"
                            >
                                <span className="text-base font-semibold">
                                    Search
                                </span>
                                <Search className=" " />
                            </button>
                        </form>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4">
                        {groupList.length === 0 && (
                            <p className="text-red-500 font-semibold">
                                No Group Available
                            </p>
                        )}
                        
                        {groupList.map((group, index) => (
                            <GroupCard
                            group={group}
                            key={index}
                            userRole={userData ? userData.role : null}
                            onDelete={() => handleDelete(group.id)}
                            onAddMember={(newMemberEmail) => handleAddMember(group.id, newMemberEmail)}
                            />
                        ))}
                    </div>
                </div>

                <ModalState isOpen={isOpen}>
                    <div className="bg-white w-full lg:min-w-[500px] p-5 rounded">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-pink-600 float-right hover:text-pink-400 transition-all ease-linear"
                        >
                            <XSquare size={18} />
                        </button>
                        <h4 className="text-base font-medium">
                            - Create Team
                        </h4>
                        <form
                            onSubmit={handleGroupCreateSubmit}
                            className="text-sm"
                        >
                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="name"
                                >
                                    Team Name
                                </label>
                                <input
                                    name="name"
                                    value={groupName}
                                    onChange={handleTeamName}
                                    id="name"
                                    className="border py-2 px-2 rounded w-full"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="name"
                                >
                                    Team Member Email
                                </label>

                                    <input
                                        type="text"
                                        placeholder="Type team member email & press enter"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        className="border py-2 px-2 rounded w-full"
                                        //required
                                    />
                                    <button
                                        type="submit"
                                        className="whitespace-nowrap bg-pink-500 py-2 px-2 rounded text-white"
                                        onClick={(e) => handleAddValue(e)}
                                    >
                                        Add Email
                                    </button>

                                <p className="text-red-500">
                                    Email Added: {teamEmail.length}
                                </p>
                            </div>

                            <button
                                className="w-full bg-pink-500 mt-4 py-2 rounded text-white font-medium"
                                type="submit"
                            >
                                Create Team
                            </button>
                        </form>
                    </div>
                </ModalState>
                </div>
                {notification && (
            <div className="notification success">
            {notification}
            </div>
        )}
        </>
    );
}
