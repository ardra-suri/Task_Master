import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useUser} from "../context/userContext";

export default function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const {UserLogin} = useUser();

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setLogin({
            ...login,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await UserLogin(login);
    };

    return (
        <div>
            <div className="h-[100vh]  flex justify-center items-center">
                <div className="shadow-sm bg-Dark rounded text-white   p-6 md:w-[50%] lg:w-[24%]">
                    <div className="flex justify-center items-center flex-col">
                            <span className="text-4xl text-light ml-2 font-extrabold">
                                TaskMaster
                            </span>
                            <p className="mt-4">Welcome Back to TaskMaster</p>
                    </div>
                    {/* Form */}
                    <div>
                        <h2 className="font-bold text-2xl mt-6">Sign in</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col mt-2 gap-4"
                            action=""
                        >
                            <input
                                className="border py-2 px-2 rounded bg-transparent"
                                type="text"
                                name="email"
                                value={login.email}
                                onChange={handleInputChange}
                                placeholder="example@gmail.com"
                                required
                            />

                            <input
                                className="border py-2 px-2 rounded bg-transparent"
                                type="password"
                                name="password"
                                onChange={handleInputChange}
                                value={login.password}
                                placeholder="password"
                                required
                            />

                            <button
                                className="bg-pink-500 hover:bg-opacity-70 transition-all ease-linear mb-5 py-2 text-white font-bold rounded"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>

                        <div>
                            <span className="mr-5">Don't have an account on TaskMaster?</span>
                            <Link
                                className="text-pink-500 font-semibold underline hover:text-pink-400 transition-all ease-linear"
                                to={"/signup"}
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
