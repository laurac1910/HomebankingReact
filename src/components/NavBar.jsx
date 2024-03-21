import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/anchor.css";
import logo from "../assets/logo1.png";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/authActions";


const NavBar = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
    props.onLogout();
    window.location.href = "/";
  }

  return (
    <nav className="w-[100%] lg:w-[70%] relative lg:left-[27%] left-[0%] xl:w-[78%] xl:left-[21%]">
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container ">
          <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
            Dashboard
          </h5>
          <img src={logo} alt="" className="logo" />
          <div id="container_button">
            <NavLink to={"/ClientPage"}>
              <button className="button">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#606060"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                      <path d="M12 14v8H4a8 8 0 0 1 8-8zm6 7.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </NavLink>
            <NavLink to={"/AccountPage"}>
              <button className="button ml-5">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 1L23 6H1L12 1Z"
                      stroke="#606060"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M1 23H23"
                      stroke="#606060"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M2 20V9H6V20H2Z"
                      stroke="#606060"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M18 20V9H22V20H18Z"
                      stroke="#606060"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M10 20V9H14V20H10Z"
                      stroke="#606060"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </NavLink>
            <NavLink to={"/LoansPage"}>
              <button className="button ml-5">
                <svg
                  fill="#606060"
                  width="40px"
                  height="40px"
                  viewBox="-3.5 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cf-icon-svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="m8.266 2.549 2.893 2.893v10.69a.476.476 0 0 1-.475.474H1.316a.476.476 0 0 1-.475-.475V3.024a.476.476 0 0 1 .475-.475zM1.95 3.657v11.84h8.102v-9.29H8.058a.576.576 0 0 1-.574-.574V3.657zm3.573 3.478a1.033 1.033 0 0 1 .256.678 1.009 1.009 0 0 1-.506.872 1.602 1.602 0 0 1-.487.206V9.1a.396.396 0 1 1-.792 0v-.204a1.813 1.813 0 0 1-.31-.099 1.143 1.143 0 0 1-.44-.322.396.396 0 1 1 .598-.518.373.373 0 0 0 .136.105 1.016 1.016 0 0 0 .19.062 1.537 1.537 0 0 0 .208.025.918.918 0 0 0 .466-.128c.145-.094.145-.171.145-.208a.243.243 0 0 0-.06-.157.58.58 0 0 0-.153-.123.787.787 0 0 0-.19-.069.907.907 0 0 0-.19-.019 1.985 1.985 0 0 1-.329-.026 1.514 1.514 0 0 1-.426-.137 1.239 1.239 0 0 1-.406-.327 1.052 1.052 0 0 1-.242-.66 1.065 1.065 0 0 1 .53-.9 1.583 1.583 0 0 1 .473-.196V5a.396.396 0 0 1 .792 0v.21a1.856 1.856 0 0 1 .316.112 1.318 1.318 0 0 1 .386.265.396.396 0 1 1-.56.561.529.529 0 0 0-.15-.104 1.037 1.037 0 0 0-.197-.069l-.021-.004a1.015 1.015 0 0 0-.16-.028.901.901 0 0 0-.457.122.283.283 0 0 0-.16.232.272.272 0 0 0 .064.16.454.454 0 0 0 .146.118.736.736 0 0 0 .202.064 1.197 1.197 0 0 0 .2.016 1.695 1.695 0 0 1 .357.037 1.584 1.584 0 0 1 .391.141 1.372 1.372 0 0 1 .38.303zm3.391 3.436H3.091v1.108h5.822zm0 2.499H3.091v1.108h5.822zm0-4.997H6.501V9.18h2.412z"></path>
                  </g>
                </svg>
              </button>
            </NavLink>
            <NavLink to={"/TransactionForm"}>
              <button className="button ml-5">
                <svg
                  width="38px"
                  height="38px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="none"
                      stroke="#606060"
                      strokeWidth="2"
                      d="M2,7 L20,7 M16,2 L21,7 L16,12 M22,17 L4,17 M8,12 L3,17 L8,22"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </NavLink>
            <NavLink to={"/"}>
              <button onClick={handleLogout} className="button ml-5">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g clipPath="url(#clip0_14_1971)">
                      {" "}
                      <path
                        d="M21.486 55.94L48.453 55.94C50.935 55.94 52.947 53.928 52.947 51.446L52.947 12.494C52.947 10.012 50.935 8 48.453 8L21.486 8C19.004 8 16.992 10.012 16.992 12.494L16.992 51.446C16.992 53.928 19.004 55.94 21.486 55.94Z"
                        stroke="#7a7a7a"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M28.976 26.011L34.969 31.97L28.976 37.996"
                        stroke="#0CCDFB"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M34.969 31.97H11"
                        stroke="#0CCDFB"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0_14_1971">
                        {" "}
                        <rect
                          width="45.947"
                          height="51.94"
                          fill="white"
                          transform="translate(9 6)"
                        ></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
