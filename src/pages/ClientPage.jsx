import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Client from "../components/Client";
import poster from "../assets/poster.png";
import "../assets/clientPage.css";
import { Link } from "react-router-dom";

const ClientPage = () => {
  const [client, setClients] = useState([]);
  useEffect(() => {
    axios("http://localhost:8080/api/clients/1")
      .then((response) => {
        setClients(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <main>
        <div className="lg:w-[60%] relative lg:left-[30%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10 mb-10">
          {client ? (
            <Client
              key={client.id}
              name={`${client.firstName} ${client.lastName}`}
              email={client.email}
              accounts={client.accounts || []}
              cards={client.cards || []}
              loans={client.loans || []}
            />
          ) : (
            <p>Client not found</p>
          )}

          <Link to={"/CardForm"}>
            <img src={poster} alt="poster" className="poster" />
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ClientPage;
