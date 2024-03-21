import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import loa from "../assets/loa.png";
import DataBase from "../utils/DataBase";
import { Toast, ToastToggle} from 'flowbite-react';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';

const LoanForm = () => {
  const [loanTypes, setLoanTypes] = useState([]);
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amount, setAmount] = useState(""); 
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const loanTypeRef = useRef(null);
  const accountRef = useRef(null);
  const amountRef = useRef(null);
  const paymentAmountRef = useRef(null);

  useEffect(() => {
    axios("http://localhost:8080/api/loans/")
      .then((response) => {
        const options = response.data.map((loan) => ({
          name: loan.name,
          payments: loan.payments,
        }));
        setLoanTypes(options);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLoanTypeChange = (e) => {
    const selectedLoan = loanTypes.find((loan) => loan.name === e.target.value);
    setSelectedLoanType(selectedLoan);
    setSelectedPayment("");
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const loan = {
      amount: amountRef.current.value,
      payments: paymentAmountRef.current.value,
      destinationAccount: accountRef.current.value,
      name: loanTypeRef.current.value
    };
    const token = localStorage.getItem("token");
    axios.post("http://localhost:8080/api/loans/request", loan, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log("Préstamo agregado exitosamente:", response.data);
        setShowSuccessToast(true);
       
      })
      .catch((error) => {
        console.error("Error al agregar el préstamo:", error);
        setShowErrorToast(true);
      });
  }

  function getAccountOptions() {
    const client = DataBase();
    if (!client || !client.accounts || client.accounts.length === 0) {
      return [
        <option key="no-accounts" value="">
          No accounts
        </option>,
      ];
    }
    return client.accounts.map((account, index) => (
      <option key={index} value={account.number}>
        {account.number}
      </option>
    ));
  }

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
        <div className="ml-3 text-sm font-normal">Your loan has been approved</div>
        <ToastToggle onClose={hideToast} />
      </Toast>
    )}

    {showErrorToast && (
      <Toast className="lg:ml-[410px] lg:max-w-2xl">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 ">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Your loan has not been approved </div>
        <ToastToggle onClose={hideToast} />
      </Toast>
    )}
    <div className="lg:w-[60%] relative lg:left-[30%] py-6 px-6 rounded-xl border border-gray-200 border-2 p-px  mt-10 flex flex-wrap gap-10 mb-10 ">
      <form onSubmit={handleSubmit} className=" rounded-xl shadow-xl border-2 pr-20 pl-8 py-5">
        <fieldset>
          <label htmlFor="loan-type" className="text-lg font-semibold block ">
            Select a type of loan
          </label>
          <select
            ref={loanTypeRef}
            name="loanType"
            id="loan-type"
            value={selectedLoanType ? selectedLoanType.name : ""}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handleLoanTypeChange}
          >
            <option value="" disabled>
              None
            </option>
            {loanTypes.map((loanType) => (
              <option key={loanType.name} value={loanType.name}>
                {loanType.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label
            htmlFor="account"
            className="text-lg font-semibold block mt-5 "
          >
            Select your account
          </label>
          <select
            ref={accountRef}
            name="account"
            id="account"
            defaultValue=""
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="" disabled>
              None
            </option>
            {getAccountOptions()}
          </select>
        </fieldset>
        <fieldset>
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
              onChange={handleAmountChange}
              placeholder="Enter amount"
              required
            />
          </div>
        </fieldset>
        {selectedLoanType && (
          <fieldset>
            <label
              htmlFor="payment-amount"
              className="text-lg font-semibold block mt-5 "
            >
              Select the amount of payments
            </label>
            <select
              ref={paymentAmountRef}
              name="paymentAmount"
              id="payment-amount"
              value={selectedPayment}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onChange={handlePaymentChange}
            >
              <option value="" disabled>
                None
              </option>
              {selectedLoanType.payments.map((payment, index) => (
                <option key={index} value={payment}>
                  {payment}
                </option>
              ))}
            </select>
          </fieldset>
        )}
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
          <div className="absolute inset-0 w-3 bg-azul-marca transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Apply!
          </span>
        </button>
      </form>
      <img
        src={loa}
        alt=""
        className="left-[90px] relative w-[420px] h-[420px] "
      />
    </div>
    </div>
  );
};

export default LoanForm;
