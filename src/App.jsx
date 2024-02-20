import { useState } from 'react'
import React from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import ClientPage from './pages/ClientPage'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import AccountPage from './pages/AccountPage'
import LoansPage from './pages/LoansPage'
import CardForm from './pages/CardForm'
import LoanForm from './pages/LoanForm'
import AccountForm from './pages/AccountForm'


function App() {

  return (
  < BrowserRouter>
     <MainLayout>
  <Routes>
  <Route path="/ClientPage" element={<ClientPage/>}></Route>
  <Route path="/AccountPage" element={<AccountPage/>}></Route>
  <Route path="/LoansPage" element={<LoansPage/>}></Route>
  <Route path='/CardForm' element={<CardForm/>}></Route>
  <Route path='/LoanForm' element={<LoanForm/>}></Route>
  <Route path='/AccountForm' element={<AccountForm/>}></Route>
  </Routes>

   </MainLayout>
 
  </BrowserRouter>
  )

}

export default App
