import Client from "../components/Client";
import DataBase from "../utils/DataBase";
import React from "react";
import { Carousel } from "flowbite-react";
import carrousel3 from "../assets/carrousel3.png";
import carrousel4 from "../assets/carrousel4.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const ClientPage = () => {
  const userData = DataBase();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function Component() {
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 lg:w-[69%] relative lg:left-[25%] mt-5">
        <Carousel pauseOnHover>
          <img src={carrousel3} alt="..." className="rounded-lg" />
          <img src={carrousel4} alt="..." className="rounded-lg" />
        </Carousel>
      </div>
    );
  }

  const handleDeleteCard = async (cardId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`/api/cards/${cardId}`, config);
      dispatch(actions.deleteCard());
      navigate("/ClientPage");
      console.log("Card deleted");
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };
  

  return (
    <React.Fragment>
      <Component />
      <main>
        <div className="lg:w-[66%] relative lg:left-[25%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10 mb-10">
          {userData ? (
            <Client
              key={userData.id}
              name={`${userData.firstName} ${userData.lastName}`}
              email={userData.email}
              accounts={userData.accounts || []}
              cards={userData.cards || []}
              loans={userData.loans || []}
              onDeleteCard={handleDeleteCard}
            />
          ) : (
            <p>Client not found</p>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default ClientPage;
