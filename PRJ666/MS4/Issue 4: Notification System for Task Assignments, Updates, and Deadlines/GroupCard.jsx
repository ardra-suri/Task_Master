// GroupCard.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { XSquare } from "lucide-react";
import { onDelete } from "../lib/deleteGroup";
import AddMemberModal from "./AddMemberModal";
import { onAddMember } from "../lib/editMemberToGroup"; // Import the function

export default function GroupCard({ group , userRole}) {
  const { name, id, teamList } = group;
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  // const handleDelete = () => {
  //   const confirmDelete = window.confirm(
  //     `Are you sure you want to delete the group "${name}"?`
  //   );
  //   if (confirmDelete) {
  //     onDelete(id);
  //   }
  // };

  const showNotification = (message) => {
    setNotification(message);

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleDelete = () => {
    if (userRole === "Team Lead") {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete the group "${name}"?`
      );
      if (confirmDelete) {
        onDelete(id);
        showNotification(`Team "${name}" deleted successfully!`);
      }
    } else {
      alert("Permission Denied. Only Team Leads can delete groups.");
    }
  };

  


  // const handleAddMember = () => {
  //   setIsAddMemberModalOpen(true);
  // };
  const handleAddMember = () => {
    if (userRole === "Team Lead") {
      setIsAddMemberModalOpen(true);
    } else {
      alert("Permission Denied. Only Team Leads can add members.");
    }
  };

  const handleAddMemberModalClose = () => {
    setIsAddMemberModalOpen(false);
  };

  const handleGoToGroupWork = () => {
    navigate(`/group-work/${id}`);
  };


  return (
    <div className="w-full p-4 rounded text-white bg-dark400 min-h-[300px]">
      <div className="flex justify-start space-x-4 items-center">
        <h5 className="font-bold text-xl">
          <p className="text-pink-500 underline text-center">{name}</p>{" "}
        </h5>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="mt-3">Member: {teamList.length}</p>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-400 cursor-pointer"
        >
          <XSquare />
        </button>
      </div>

      <p className="mt-4 mb-2">Member List</p>
      <div className="flex justify-start gap-2 flex-wrap ">
        {teamList.map((each, i) => (
          <span
            key={i}
            className="text-xs bg-pink-500/20 px-2 py-1 rounded-full"
          >
            {each}
          </span>
        ))}
      </div>

      <button
        onClick={handleAddMember}
        className="mt-4 bg-pink-500 py-2 px-4 rounded text-white font-medium"
      >
        + Add Member
      </button>

      <br />
      <button
        onClick={handleGoToGroupWork}
        className="mt-4 bg-pink-500 py-2 px-4 rounded text-white font-medium"
      >
        Task
      </button>

      <AddMemberModal
        groupId={id}
        isOpen={isAddMemberModalOpen}
        onClose={handleAddMemberModalClose}
        onAddMember={onAddMember} // Pass the function
      />
      {notification && (
            <div className="notification">
            {notification}
            </div>
        )}
    </div>
    
      
  );
}


