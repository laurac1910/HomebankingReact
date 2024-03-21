import LoansP from "../components/LoansP";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import DataBase from "../utils/DataBase";
import React from 'react';


const LoansPage = () => {
const client = DataBase();

  if (!client || !client.accounts || client.accounts.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <React.Fragment>
      <main className="lg:w-[65%] relative lg:left-[25%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap ">
        <div>
         
          {client.loans.map((loan) => (
            <LoansP
              key={loan.id}
              name={loan.loanName}
              amount={loan.amountInUSD}
              payment={loan.payments}
            />
          ))}
        </div>
        <Link to={"/LoanForm"}>
        <img src={banner} alt="banner" className="w-[600px] lg:ml-5 lg:left-[360px] lg:w-[500px] " />
        </Link>
      </main>
    </React.Fragment>
  );
};
export default LoansPage;
