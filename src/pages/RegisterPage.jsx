import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authActions from "../redux/actions/authActions";
import axios from "axios";
import "../assets/anchor.css";
import { Toast, ToastToggle} from 'flowbite-react';
import { HiCheck, HiX } from 'react-icons/hi';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/auth/register", userData)
    .then (response => {
            console.log(response.data);
            dispatch(authActions.register(response.data));
            setShowSuccessToast(true);
            })
     .catch(error => {
            console.error('Error fetching accounts:', error);
            setShowErrorToast(true);
        });  
  };
  const hideToast = () => {
    setShowSuccessToast(false);
    setShowErrorToast(false);
  };

  return (
    <div>
    {showSuccessToast && (
      <Toast className="lg:ml-[410px] lg:max-w-xl bg-green-100 absolute">
        <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 ">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Successful registration</div>
        <ToastToggle onClose={hideToast}  className="bg-green-100"/>
      </Toast>
    )}

    {showErrorToast && (
      <Toast className="lg:ml-[410px] lg:max-w-xl bg-red-100 absolute">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 ">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Registration was not successful, please check your details </div>
        <ToastToggle onClose={hideToast} className="bg-red-100" />
      </Toast>
    )}
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950 p-12" id="containerRegister">
      <form action="" onSubmit={handleSubmit}>
        <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-gray-800 dark:to-transparent">
          <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Create Your Account
              </h1>
            </div>
            <div className="mt-8 space-y-8">
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="First Name"
                  value={userData.name}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="lastName"
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Last Name"
                  value={userData.lastName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white"
              >
                Signin
              </button>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                Already have an account? <Link to="/Login" className="underline">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
