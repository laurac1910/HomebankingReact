import React from "react";
import AccountP from "../components/AccountP";
import DataBase from "../utils/DataBase";
import { Carousel } from 'flowbite-react';
import carrousel from "../assets/carrousel.png";
import carrousel1 from "../assets/carrousel1.png"; 
import carrousel2 from "../assets/carrousel2.png";

const AccountPage = () => {
  
  const client = DataBase();

  if (!client || !client.accounts || client.accounts.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(client.accounts);

  function Component() {
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 lg:w-[68%] relative lg:left-[25%] mt-5">
        <Carousel pauseOnHover>
          <img src={carrousel} alt="..." className="rounded-lg" />
          <img src={carrousel2} alt="..." className="rounded-lg" />
          <img src={carrousel1} alt="..." className="rounded-lg" />
        </Carousel>
      </div>
    );
  }
  return (
    <React.Fragment>
      <Component />
      <main>
        <div className="lg:w-[65%] relative lg:left-[25%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10">
          {client.accounts.map((account) => (
            <AccountP
              key={account.id}
              number={account.number}
              balance={account.balanceInUSD}
              account={account}
            />
          ))}
      
          
        </div>
       
      </main>
    </React.Fragment>
  );
};

export default AccountPage;
