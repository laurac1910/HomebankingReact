import axios from "axios";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "../assets/anchor.css";
import loginimg from "../assets/login1.png";
import { Toast, ToastToggle} from 'flowbite-react';
import { HiX } from 'react-icons/hi';

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", user)
      .then((response) => {
        console.log(response.data);
        dispatch(authActions.login(response.data));
         props.onLogin();
        navigate("/ClientPage");

      })
      .catch((error) => {
        console.error("Error fetching accounts:", error);
        setShowErrorToast(true);
      });
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const hideToast = () => {
    setShowSuccessToast(false);
    setShowErrorToast(false);
  };


  return (
    <div>
      {showErrorToast && (
      <Toast className="lg:ml-[410px] lg:max-w-2xl absolute bg-red-100">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 ">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-norma">There was an error logging in </div>
        <ToastToggle onClose={hideToast}  className=" bg-red-100"/>
      </Toast>
    )}
    <div className="flex justify-between">
      <img src={loginimg} alt="" id="login" />
      <div
        className="flex  max-h-full items-center justify-center  dark:bg-gray-950 p-12 "
        id="containerLogin"
      >
        <form action="" onSubmit={handleLogin}>
          <div className="max-w-sm rounded-3xl bg-opacity-65 bg-white  lg:bg-gradient-to-b from-sky-300 to-purple-500 p-px ">
            <div className="rounded-[calc(1.5rem-1px)]  lg:bg-white px-10 p-12  ">
              <div>
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Signin to your account
                </h1>
                <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                  Don't have an account ?{" "}
                  <NavLink
                    to="/RegisterPage"
                    className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                  >
                    Signup
                  </NavLink>{" "}
                  for free
                </p>
              </div>

              <div className="mt-8 space-y-8">
                <div className="space-y-6">
                  <input
                    onChange={handleInput}
                    className="w-full  border-blue-600 bg-transparent text-gray-600  rounded-md border lg:border-gray-300 px-3 py-2 text-sm placeholder-gray-600 "
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    id="email"
                  />

                  <input
                    onChange={handleInput}
                    className="w-full  border-blue-600 bg-transparent text-gray-600  rounded-md border lg:border-gray-300 px-3 py-2 text-sm placeholder-gray-600 "
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>

                <button
                  type="submit"
                  className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white"
                >
                  Signin
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
