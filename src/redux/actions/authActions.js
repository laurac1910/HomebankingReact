import { createAction } from "@reduxjs/toolkit";

const current = createAction("CURRENT", (data) => {
  const dataUser = {
    firstName: data.firstName + " " + data.lastName,
    email: data.email,
  };

  return {
    payload: {
      ...dataUser,
      loggedIn: true,
    },
  };
});

const login = createAction("LOGIN", (token) => {
  localStorage.setItem("token", token);
  return {
    payload: {
      token,
      timeStamps: Date.now(),
    },
  };
});

const register = createAction("REGISTER", (data) => {
  const dataUser = {
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    password: data.password
  };

  return {
    payload: {
      ...dataUser,
      loggedIn: true,
    },
  };
});

const logout = createAction('LOGOUT', (data) => {
  return {
      payload: {
          loggedIn: false,
          timestamps: Date.now()
      }
  };
});

const deleteCard = createAction("DELETE_CARD");

const actions = { login, current, register, deleteCard, logout};
export default actions;
