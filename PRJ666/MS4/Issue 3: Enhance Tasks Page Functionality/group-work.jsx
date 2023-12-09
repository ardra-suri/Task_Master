//group-work.jsx

import { XSquare } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateTask from "../components/CreateTask";
import ModalState from "../components/Modal";
import Task from "../components/Task";
import { filterData } from "../lib/filterDataShow";
import { getAllTasks } from "../lib/getTasks";
import { updateTaskData } from "../lib/updateStatus";
import { getGroupDataById } from "../lib/getGroupData"

export default function GroupWork() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    let { groupId } = useParams();
    const [allTask, setAllTask] = useState([]);
    const [newTask, setNewTask] = useState([]);
    const [processing, setProcessing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [filter, setFilter] = useState("");
    const [status, setStatus] = useState("new task");
    const [title, setTitle] = useState("new title");
    const [description, setDescription] = useState("new description");
    const [priority, setPriority] = useState("new priority");

    const [groupData, setGroupData] = useState({
        groupName: "",
        members: [],
    });
    const [file, setFile] = useState(null);

    console.log(status);

    if (groupId) {
        localStorage.setItem("groupId", groupId);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    useEffect(() => {
        getGroupDataById(groupId, (data) => {
            setGroupData(data);
        });

        getAllTasks((data) => {
            const groupData = data.filter((item) => item.group_Id === groupId);
            const newTasks = filterData(groupData, "new task", filter);
            const processingTasks = filterData(groupData, "processing", filter);
            const completedTasks = filterData(groupData, "completed", filter);

            setNewTask(newTasks);
            setProcessing(processingTasks);
            setCompleted(completedTasks);
        });

    }, [isOpen, filter, isOpen2]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleInputChange2 = async (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    };

    const handleTitle = async (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const handleDescription = async (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    };

    const handlePriority = async (e) => {
        e.preventDefault();
        setPriority(e.target.value);
    };

    const updateHandleSubmit = async (e) => {
        e.preventDefault();

        // Create an empty taskData object
        const taskData = {
            group_Id: localStorage.getItem("groupId"),
            title: title,
            assign_to: "",
            description: description,
            status: status,
            priority: priority,
        };

        const existingTask = allTask.find((task) => task.id === selectedId);

        // Create a new taskData object with existing data and updated status
        const updatedTaskData = {
            ...existingTask,
            status: status,
        };

        // If a file is uploaded, attach it to the taskData
        if (file) {
            updatedTaskData.file = file;
        }

        // Call updateTaskData with the complete taskData
        updateTaskData(taskData, selectedId);
        setIsOpen2(false);
        setStatus("new task");
        setFile(null);
    };

    return (
        <>

            <div className="m-4 ">
                <CreateTask isOpen={isOpen} setIsOpen={setIsOpen} />

                {/* Task Filter */}
                <div className="text-pink-500 ml-4">
                    <h1 className="mt-2 text-xl font-bold">Filter Task</h1>
                    <select
                        className="border py-2 px-2 rounded w-[150px] mt-2 bg-transparent bg-white font-bold"
                        name="priority"
                        value={filter}
                        onChange={handleInputChange}
                        id="priority"
                    >
                        <option value="">Select Filter</option>
                        <option value="date">Today Date</option>
                    </select>
                </div>
                {groupData && (
                    <div className="text-pink-500 ml-4 mt-4">
                        <h1 className="text-xl font-bold">Group Information</h1>
                        <p className="mt-2">Group Name: {groupData.groupName}</p>
                        <p className="mt-2">Members: {groupData.members.join(", ")}</p>
                    </div>
                )}


                <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-pink-500/30">
                            New Task
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            {newTask.map((each, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="cursor-pointer hover:scale-105 transition-all ease-linear"
                                        onClick={() => {
                                            setIsOpen2(true);
                                            setSelectedId(each.id);
                                        }}
                                    >
                                        <Task taskCard={each} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-yellow-500/30">
                            Processing
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            {processing.map((each, i) => {
                                // console.log(each);
                                return (
                                    <div
                                        key={i}
                                        className="cursor-pointer hover:scale-105 transition-all ease-linear"
                                        onClick={() => {
                                            setIsOpen2(true);
                                            setSelectedId(each.id);
                                        }}
                                    >
                                        <Task taskCard={each} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-dark400 mt-4 rounded">
                        <h5 className="text-center py-2 rounded text-white font-bold bg-green-500/30">
                            Completed
                        </h5>

                        <div className="h-[75vh] m-4 overflow-y-auto space-y-4">
                            {completed.map((each, i) => {
                                // console.log(each);
                                return (
                                    <div
                                        key={i}
                                        className="cursor-pointer hover:scale-105 transition-all ease-linear"
                                        onClick={() => {
                                            setIsOpen2(true);
                                            setSelectedId(each.id);
                                        }}
                                    >
                                        <Task taskCard={each} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <ModalState isOpen={isOpen2}>
                <div className="bg-white w-full lg:min-w-[500px] p-5 rounded">
                    <button
                        onClick={() => setIsOpen2(false)}
                        className="text-pink-600 float-right hover:text-purple-400 transition-all ease-linear"
                    >
                        <XSquare size={18} />
                    </button>
                    <h4 className="text-base font-medium">
                        Update Task
                        <div>
                            {/* Form elements without a form tag */}
                            <div className="w-full">
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="description"
                                >
                                    Status
                                </label>
                                <select
                                    className="border py-2 px-2 rounded w-full bg-transparent"
                                    name="status"
                                    id="priority"
                                    onChange={(e) => handleInputChange2(e)}
                                    required
                                >
                                    <option value="new task">New Task</option>
                                    <option value="processing">Processing</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="name"
                                >
                                    Title
                                </label>
                                <input
                                    name="title"
                                    id="name"

                                    onChange={(e) => handleTitle(e)}
                                    className="border py-2 px-2 rounded w-full"
                                    type="text"
                                    placeholder=" Title name"

                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"

                                    onChange={(e) => handleDescription(e)}
                                    cols="30"
                                    rows="2"
                                    className="border py-2 px-2 rounded w-full"
                                    placeholder="Description"

                                ></textarea>
                            </div>


                            <div className="w-full">
                                <label
                                    className="block text-sm mb-1 mt-4"
                                    htmlFor="description"
                                >
                                    Priority
                                </label>
                                <select
                                    className="border py-2 px-2 rounded w-full bg-transparent"
                                    name="priority"

                                    onChange={(e) => handlePriority(e)}
                                    id="priority"
                                >
                                    <option value="normal">Normal</option>

                                    <option value="medium">Medium</option>

                                    <option value="urgent">Urgent</option>
                                </select>
                            </div>

                            {/* File input for task */}
                            <div className="w-full mt-4">
                                <label
                                    className="block text-sm mb-1"
                                    htmlFor="fileInput"
                                >
                                    Attach File
                                </label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <button
                                className="w-full bg-pink-500 hover:bg-purple-500/80 mt-4 py-2 rounded text-white transition-all ease-linear font-medium"
                                type="submit"
                                onClick={updateHandleSubmit} // Move this onClick to the button instead of form onSubmit
                            >
                                Update Task
                            </button>
                        </div>
                    </h4>
                </div>
            </ModalState>

        </>
    );
}