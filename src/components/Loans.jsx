import React from "react";
import { Link } from "react-router-dom";

const Loans = ({ loan }) => {
  return (
    
    <article className="mt-10 w-80 mb-10">
      <Link to="/LoansPage">
      <div className="relative bg-white py-6 px-6 rounded-3xl w-75% my-4 shadow-xl ">
        <div className=" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6">
          <svg
            width="35px"
            height="35px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#ffffff"
                strokeWidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 1L23 6H1L12 1Z"
                stroke="#919191"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M1 23H23"
                stroke="#919191"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M2 20V9H6V20H2Z"
                stroke="#919191"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M18 20V9H22V20H18Z"
                stroke="#919191"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M10 20V9H14V20H10Z"
                stroke="#919191"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <p>
          <span className="text-xl font-semibold my-2">Your Loan</span>{" "}
          <span className="text-xl font-light my-2">{loan.loanName}</span>
        </p>
       
      </div>
      </Link>
    
    </article>
     
  );
};

export default Loans;
