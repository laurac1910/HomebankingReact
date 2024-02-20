import React from "react";

const LoansP = ({ name, payment, amount }) => {
  return (
    <section className="mb-10 flex flex-col flex-wrap">
      <div className="relative bg-white py-6 px-6 rounded-3xl w-60% my-4 shadow-xl ">
        <div className=" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6"></div>
        <h1 className="text-xl font-semibold my-2">{name}</h1>
        <p>
          <span className="mr-5 text-lg ">Amount of your loan:</span>
          <span>{amount}</span>
        </p>
        <p>
          <span className="mr-5 text-lg">Amount of payments:</span>
          <span>{payment}</span>
        </p>
      </div>
    </section>
  );
};

export default LoansP;
