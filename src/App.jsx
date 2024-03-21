import React from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ClientPage from "./pages/ClientPage";
import { Routes, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import LoansPage from "./pages/LoansPage";
import CardForm from "./pages/CardForm";
import LoanForm from "./pages/LoanForm";
import TransactionForm from "./pages/TransactionForm";
import Login from "./pages/Login.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { useState } from "react";
import AccountForm from "./pages/AccountForm";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

  };


  return (
    <>
      {isLoggedIn ? (
        <MainLayout>
          <Routes>
            <Route path="/ClientPage" element={<ClientPage />} />
            <Route path="/AccountPage" element={<AccountPage />} />
            <Route path="/LoansPage" element={<LoansPage />} />
            <Route path="/CardForm" element={<CardForm />} />
            <Route path="/LoanForm" element={<LoanForm />} />
            <Route path="/TransactionForm" element={<TransactionForm />} />
            <Route path="/AccountForm" element={<AccountForm />} />
            <Route element={<SideBar onLogin={handleLogout} />} />
            <Route element={<NavBar onLogin={handleLogout} />} />
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
          <Route  path="*" element={<Login onLogin={handleLogin} />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
