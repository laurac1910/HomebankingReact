import React from "react";
import axios from "axios";
import accountp from "../assets/accountp.png";
import { useState } from "react";
import { Toast, ToastToggle} from 'flowbite-react';
import { HiCheck,HiX  } from 'react-icons/hi';

const AccountForm = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

    const handleSubmit = async () => {
        try {
          const token = localStorage.getItem("token"); 
          await axios.post(
            "http://localhost:8080/api/accounts/current",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
       
          console.log("Account created successfully!");
          setShowSuccessToast(true);
        } catch (error) {
        
          console.error("Error creating account:", error);
          setShowErrorToast(true);
        }
      };

      const hideToast = () => {
        setShowSuccessToast(false);
        setShowErrorToast(false);
      };
      
  return (
    <div>
    {showSuccessToast && (
      <Toast className="lg:ml-[410px] lg:max-w-2xl">
        <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 ">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Your new account has been approved</div>
        <ToastToggle onClose={hideToast} />
      </Toast>
    )}

    {showErrorToast && (
      <Toast className="lg:ml-[410px] lg:max-w-2xl">
        <div className="inline-flex h-8 w-8  shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 ">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Your new account has not been approved</div>
        <ToastToggle onClose={hideToast} />
      </Toast>
    )}

    <section className="lg:w-[65%] relative lg:left-[25%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap ">
      <h1 className="text-xl font-semibold my-2 p-5 lg:w-1/2 text-gray-700 ">
        "Ready to take control of your finances? Apply for a new account today
        and unlock a world of financial possibilities. Enjoy convenient banking
        services tailored to your needs. Start your journey towards financial
        freedom now!"
      </h1>
      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5 ml-24 lg:top-14"   onClick={handleSubmit}>
      
          <div className="absolute inset-0 w-3 bg-azul2 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Apply!
          </span>
        </button>
    </section>
    <img src={accountp} alt="" className="lg:w-[68%] relative lg:left-[25%] mt-5 rounded-lg mb-5" />
    </div>
  );
};

export default AccountForm;
