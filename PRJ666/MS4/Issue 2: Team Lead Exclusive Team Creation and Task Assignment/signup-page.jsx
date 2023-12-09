import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createCollectionDB} from "../lib/indexdb";

export default function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "Member",
        description: "",
        photo: "",
        groupId: [],
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = createCollectionDB(); // Don't await here

        request.onsuccess = (event) => {
            const db = event.target.result; // Get the database instance
            const userToAdd = {...user}; // Create a copy of the user object

            const transaction = db.transaction("user_data", "readwrite");
            const store = transaction.objectStore("user_data");

            const addRequest = store.put(userToAdd);

            addRequest.onsuccess = (event) => {
                localStorage.setItem("@logeIn", true);
                localStorage.setItem("email", user.email);
                navigate("/");
            };

            addRequest.onerror = (event) => {
                alert(event.target.error);
            };

            setUser({
                name: "",
                email: "",
                password: "",
                groupId: [],
                role: "Member"
            });
        };

        request.onerror = (event) => {
            alert("Error opening database: " + event.target.error);
        };
    };

    return (
        <div>
            <div className="h-[100vh] flex justify-center items-center text-white">
                <div className="shadow-sm rounded bg-light p-6 w-full md:w-[50%] lg:w-[24%]">
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex">
                            <span className="text-4xl text-Dark-500 ml-2 font-extrabold">
                                TaskMaster
                            </span>
                        </div>
                        <p className="mt-4">Welcome Back to TaskMaster</p>
                    </div>
                    {/* Form */}
                    <div>
                        <h2 className="font-bold text-2xl mt-6">Register</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col mt-2 gap-4"
                            action=""
                        >
                            <input
                                id="name"
                                className="border py-2 px-2 rounded bg-transparent"
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                placeholder="your Name"
                                required
                            />

                            <input
                                id="email"
                                className="border py-2 px-2 rounded bg-transparent"
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                placeholder="example@gmail.com"
                                required
                            />

                            <input
                                className="border py-2 px-2 rounded  bg-transparent"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                placeholder="password"
                                required
                            />

                            <div>
                            <label className="block text-sm mb-1 mt-4" htmlFor="role">Role</label>
                            <select
                            id="role"
                            name="role"
                                    value={user.role}
                                    onChange={handleInputChange}
                                    className="border py-2 px-2 rounded bg-transparent"
                                    required>
                                <option value="Member">Member</option>
                                <option value="Team Lead">Team Lead</option>
                            </select></div>

                            <button
                                className="bg-pink-500 hover:bg-opacity-70 transition-all ease-linear mb-5 py-2 text-white font-bold rounded"
                                type="submit"
                            >
                                Sign up
                            </button>
                        </form>

                        <div>
                            <span className="mr-5">
                                already have an account?
                            </span>
                            <Link
                                className="text-pink-500 font-semibold underline hover:text-pink-400 transition-all ease-linear"
                                to={"/login"}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Toaster /> */}
        </div>
    );
}

