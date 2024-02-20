import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LoansP from "../components/LoansP";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

const LoansPage = () => {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    axios("http://localhost:8080/api/clientloan/client/1")
      .then((response) => {
        setLoans(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <React.Fragment>
      <main className="lg:w-[65%] relative lg:left-[25%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap ">
        <div>
         
          {loans.map((loan) => (
            <LoansP
              key={loan.id}
              name={loan.loanName}
              amount={loan.amountInUSD}
              payment={loan.payments}
            />
          ))}
        </div>
        <Link to={"/LoanForm"}>
        <img src={banner} alt="banner" className="w-[600px] lg:absolute lg:left-[360px]" />
        </Link>
      </main>
    </React.Fragment>
  );
};
export default LoansPage;
