import React from "react";
import Anchor from "./Anchor";
import { LinksNav } from "../utils/links.jsx";
import "../assets/anchor.css";
import { linksForms } from "../utils/linksForms.jsx";
const SideBar = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo-container">
          <a href="#" title="home">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="logo-img"
              alt="tailus logo"
            />
          </a>
        </div>

        {LinksNav.map((link) => {
          return (
            <nav key={link.href}>
              <Anchor href={link.href} aria-label="dashboard">
                {link.image}
                <span>{link.name}</span>
              </Anchor>
            </nav>
          );
        })}

        <div className="border-2 border-azul-marca mx-2 mt-5 border-dashed"></div>
        <div className="mt-3">
          {linksForms.map((link) => {
            return (
              <nav key={link.href}>
                <Anchor href={link.href} aria-label="dashboard">
                  {link.image}
                  <span >{link.name}</span>
                </Anchor>
              </nav>
            );
          })}
        </div>
      </div>

      <div className="logout-btn">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="logout-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="logout-label">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
