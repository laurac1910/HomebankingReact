import React, { useState } from "react";
import goldImage from "../assets/gold.png";
import silverImage from "../assets/silver.png";
import titaniumImage from "../assets/titanium.png";

const Cards = ({ card ,onDeleteCard }) => {
  const [showNumbers, setShowNumbers] = useState(false);

  const handleClick = () => {
    setShowNumbers(!showNumbers);
  };
  const handleDelete = () => {
    onDeleteCard(card.id); };

  const getCardBackground = (cardColor) => {
    switch (cardColor.toLowerCase()) {
      case "gold":
        return goldImage;
      case "silver":
        return silverImage;
      case "titanium":
        return titaniumImage;
      default:
        return ""; 
    }
  };

  const cardBackground = getCardBackground(card.cardColor);

  return (
    <article className="mt-10 mb-20">
      
      <div
        className="relative py-6 px-6 rounded-3xl my-4 shadow-xl"
        onClick={handleClick}
      >
           <button onClick={handleDelete} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full m-2">
          Delete
        </button>
        <div className=" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6">
          <svg
            width="45px"
            height="45px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#ffffff"
                strokeWidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M3.5 10H20.5"
                stroke="#00af84"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M6 14H8"
                stroke="#00af84"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M11 14H13"
                stroke="#00af84"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H12H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V12V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H12H7C5.11438 19 4.17157 19 3.58579 18.4142C3 17.8284 3 16.8856 3 15V12V9Z"
                stroke="#00af84"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="min-h-[40vh] flex justify-center items-center" >
          <div className="space-y-5">
            <div
              className={`w-96 h-56 m-auto rounded-xl relative shadow-2xl transition-transform transform hover:scale-110 ${
                card.cardColor.toLowerCase() === "titanium"
                  ? "text-white"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${cardBackground})`,
                backgroundSize: "143%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full rounded-xl" />
              <div className="w-95% px-2 absolute top-8 ">
                <div className="flex justify-between ">
                  <div className="">
                    <p className="font-light mr-64">Name</p>
                    <p className="font-medium tracking-widest ">
                      {card.clientName} {card.clientLastName}
                    </p>
                  </div>

                  <p className="font-medium tracking-widest mr-4">
                    {card.cardType}
                  </p>
                </div>
                <div className="pt-1">
                  <p className="font-light">Card Number</p>
                  <p className="font-medium tracking-more-wider">
                    {showNumbers ? card.cardNumber : "**** **** **** ****"}
                  </p>
                </div>
                <div className="pt-6 pr-6">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-light text-xs">Valid</p>
                      <p className="font-medium tracking-wider text-sm">
                        {card.fromDate}
                      </p>
                    </div>
                    <div className="">
                      <p className="font-light text-xs text-xs">Expiry</p>
                      <p className="font-medium tracking-wider text-sm">
                        {card.thruDate}
                      </p>
                    </div>

                    <div className="">
                      <p className="font-light text-xs">CVV</p>
                      <p className="font-bold tracking-more-wider text-sm">
                        {showNumbers ? card.cvv : "***"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards;
