import React, { useRef  , useState} from "react";
import card from "../assets/card.png";
import axios from "axios";
import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

axios.defaults.baseURL = "http://localhost:8080";

const CardForm = () => {
  const cardRef = useRef(null);
  const cardColorRef = useRef(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      cardType: cardRef.current.value,
      cardColor: cardColorRef.current.value,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post("/api/cards/current", cardData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201 || response.status === 200) {
        console.log("Card created successfully");
        setShowSuccessToast(true);
      }
    } catch (error) {
      console.error("Error creating card:", error);
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
        <div className="ml-3 text-sm font-normal">Card created successfully</div>
        <ToastToggle onClose={hideToast} />
      </Toast>
    )}

    {showErrorToast && (
      <Toast className="lg:ml-[410px] lg:max-w-2xl">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 ">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Card could not be created</div>
        <ToastToggle onClose={hideToast} />
      </Toast>
    )}
    <div className="lg:w-[60%] relative lg:left-[30%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10 mb-10 ">
      <img src={card} alt="cards"  />
      <form onSubmit={handleSubmit} className=" rounded-xl shadow-xl pr-20 pl-8 border-2 pt-3 ml-5">
        <fieldset>
          <label htmlFor="card-type" className="text-lg font-semibold block">
            Select card type
          </label>
          <select
            ref={cardRef}
            name="cardType"
            id="card-type"
            defaultValue=""
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="" disabled>
              None
            </option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="color" className="text-lg font-semibold block mt-5">
            Select card membership (color)
          </label>
          <select
            ref={cardColorRef}
            name="color"
            id="color"
            defaultValue=""
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="" disabled>
              None
            </option>
            <option value="GOLD">Gold</option>
            <option value="SILVER">Silver</option>
            <option value="TITANIUM">Titanium</option>
          </select>
        </fieldset>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
          <div className="absolute inset-0 w-3 bg-azul-marca transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Apply!
          </span>
        </button>
      </form>
    </div>
    </div>
  );
};

export default CardForm;
