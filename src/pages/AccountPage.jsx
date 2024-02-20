import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AccountP from "../components/AccountP";
import loansimage from "../assets/loans.png";


const AccountPage = () => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    axios("http://localhost:8080/api/accounts/client/1")
      .then((response) => {
        setAccounts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <main>
        <div className="lg:w-[65%] relative lg:left-[25%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10">
       <div>
        {accounts.length ? (
            accounts.map((account) => (
              <AccountP
                key={account.id}
                number={account.number}
                balance={account.balanceInUSD}
                account={account}
              />
            ))
          ) : (
            <p>Account not found</p>
          )}
        </div>
          <img src={loansimage} alt="poster"  className="max-w-[330px] lg:absolute lg:left-[600px] rounded-lg"/>
        </div>
       
      </main>
    </React.Fragment>
  );
};

export default AccountPage;
