import React, { Fragment } from "react";
import Accounts from "./Accounts";
import Cards from "./Cards";
import Loans from "./Loans";

const Client = ({ name, accounts, cards, loans }) => {
  return (
    <Fragment>
      <div>
        <div className="relative bg-white py-6 px-6 rounded-3xl w-75% my-4 shadow-xl ">
          <div className=" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6">
            <svg
              version="1.1"
              id="USER"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="50px"
              viewBox="-180 -180 2160.00 2160.00"
              enableBackground="new 0 0 1800 1800"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="-180"
                  y="-180"
                  width="2160.00"
                  height="2160.00"
                  rx="1080"
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
                <g>
                  {" "}
                  <path
                    fill="#008cb4"
                    d="M899.996,13.388c-488.883,0-886.611,397.732-886.611,886.615c0,297.415,147.216,561.092,372.596,722.011 c14.883,10.622,30.131,20.758,45.673,30.469c101.1,63.151,215.747,106.507,338.525,124.601 c42.384,6.248,85.723,9.529,129.816,9.529c44.084,0,87.423-3.281,129.808-9.529c122.778-18.094,237.434-61.449,338.525-124.592 c15.542-9.711,30.799-19.855,45.682-30.478c225.389-160.919,372.604-424.596,372.604-722.011 C1786.615,411.12,1388.879,13.388,899.996,13.388z M899.996,1724.407c-163.127,0-315.337-47.626-443.461-129.704 c58.621-107.8,176.409-191.24,323.694-221.345v22.277l119.594,66.448l119.932-66.431v-22.295 c147.285,30.104,265.074,113.545,323.694,221.345C1215.324,1676.781,1063.118,1724.407,899.996,1724.407z M554.979,912.854 c-15.75-5.685-27.058-20.743-27.058-38.429c0-17.69,11.308-32.751,27.058-38.44v9.194V912.854z M1238.035,845.179v-8.769 c15.144,6.001,25.896,20.758,25.896,38.001c0,17.261-10.752,32.021-25.896,38.017V845.179z M1212.461,711.77 c-2.014,9.963-4.564,19.813-7.654,29.489c-61.936-32.053-146.322-67.303-235.16-79.466 c-155.131-21.218-168.833-29.74-183.829-73.174l-12.957-37.516l-29.723,26.291c-0.894,0.789-80.681,71.251-161.344,136.272 c-11.984-42.575-13.798-86.934-5.103-130.046c27.397-135.974,156.441-234.666,306.824-234.666c23.249,0,46.749,2.365,69.859,7.017 c85.297,17.195,159.218,63.936,208.153,131.617C1210.005,554.617,1228.081,634.235,1212.461,711.77z M608.063,845.179V817.6 v-56.933c55.635-44.597,111.831-92.696,143.719-120.336c30.452,47.001,85.592,56.964,210.67,74.073 c86.504,11.833,170.369,49.166,222.49,76.398V817.6v27.579v94.646c0,159.053-129.399,288.436-288.436,288.436 c-159.044,0-288.444-129.383-288.444-288.436V845.179z M833.33,1310.867V1275.4c20.489,3.853,41.586,5.962,63.177,5.962 c24.048,0,47.505-2.534,70.154-7.281v36.786v30.843v22.649l-66.796,36.995l-66.535-36.969v-22.676V1310.867z M1387.403,1564.451 c-68.34-121.537-201.975-214.22-367.649-245.175v-61.016c119.42-46.385,206.444-158.038,217.075-290.979 c45.291-6.708,80.194-45.742,80.194-92.871c0-43.972-30.399-80.88-71.265-91.081c8.175-19.678,14.536-40.158,18.745-61.06 c18.588-92.227-2.699-186.615-59.94-265.794c-56.781-78.533-142.27-132.711-240.705-152.558 c-26.547-5.354-53.57-8.062-80.343-8.062c-84.273,0-166.412,27.106-231.29,76.333c-66.301,50.303-111.619,121.676-127.595,200.942 c-13.13,65.121-6.196,132.494,20.021,194.854l5.997,14.245c-43.156,8.487-75.838,46.576-75.838,92.192 c0,47.533,35.52,86.844,81.383,93.041c10.909,135.439,101.083,248.828,224.035,293.486v58.325 c-165.679,30.955-299.3,123.638-367.641,245.175C208.383,1414.259,75.59,1172.364,75.59,900.003 c0-454.583,369.827-824.41,824.406-824.41s824.415,369.828,824.415,824.41C1724.41,1172.364,1591.608,1414.259,1387.403,1564.451z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>{" "}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">{name}</p>
          </div>

          {accounts.map((account) => (
            <Accounts key={account.number} account={account} />
          ))}
        </div>
      </div>
      <div>
        {cards.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </div>
      <div  >
        {loans.map((loan) => (
          <Loans key={loan.id} loan={loan} />
        ))}
      </div>
    </Fragment>
  );
};

export default Client;
