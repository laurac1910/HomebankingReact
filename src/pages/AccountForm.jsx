import React from "react";
import { useState, useRef } from "react";
import tran from "../assets/tran.png";

const AccountForm = () => {
  const [own, setOwn] = useState("");
  const [other, setOther] = useState("");
  const [to, setTo] = useState("");

  const originRef = useRef(null);
  const amountRef = useRef(null);
  const descripRef = useRef(null);

  const handleOwn = () => {
    setOwn(true);
    setOther(false);
    setTo("Own");
  };

  const handleOther = () => {
    setOwn(false);
    setOther(true);
    setTo("Other");
  };

  function handleSubmit(e) {
    e.preventDefault();
    const account = {
      to: to,
      origin: originRef.current.value,
      amount: amountRef.current.value,
      descrip: descripRef.current.value,
    };

    console.log(account);
  }

  return (
    <div className="lg:w-[60%] relative lg:left-[30%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10 mb-10">
      <form onSubmit={handleSubmit} >
        <fieldset className="mb-5">
          <legend className="text-lg font-semibold block ">To</legend>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <label htmlFor="own">Own</label>
            <input
             
              type="checkbox"
              name="own"
              id="own"
              checked={own}
              onChange={handleOwn}
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-5"
            />
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <label htmlFor="other">Other</label>
            <input
              type="checkbox"
              name="other"
              id="other"
              checked={other}
              onChange={handleOther}
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            />
          </div>
        </fieldset>
        <fieldset className="mb-5">
          <label htmlFor="origin" className="text-lg font-semibold block ">
            Origin Account{" "}
          </label>
          <select
            name="origin"
            id="origin"
            ref={originRef}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="VIN001">VIN001</option>
            <option value="VIN002">VIN002</option>
          </select>
        </fieldset>
        <fieldset className="mb-5">
          <label htmlFor="amount" className="text-lg font-semibold block ">
            Amount
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </div>
            <input
              ref={amountRef}
              className="block py-2.5  z-20 ps-10 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter amount"
              required
            />
          </div>
        </fieldset>
        <fieldset className="mb-5">
          <label htmlFor="descrip" className="text-lg font-semibold block ">
            Description
          </label>
          <input
            type="text"
            name="descrip"
            id="descrip"
            ref={descripRef}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          />
        </fieldset>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
          <div className="absolute inset-0 w-3 bg-azul transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Submit
          </span>
        </button>
     
      </form>
      <img src={tran} alt="" className="relative  left-[200px] w-[300px] h-[300px] top-[70px]" />
    </div>
  );
};

export default AccountForm;
