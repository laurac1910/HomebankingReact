import { createReducer } from "@reduxjs/toolkit";
import authActions from "../actions/authActions";
const { login, current , register,deleteCard,logout} = authActions;

const initialState = {
  user: {
    email: "",
    name: "",
    loggedIn: null,
  },
  token: null,
  timeStamps: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(current, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    })
    .addCase(login, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        timeStamps: action.payload.timeStamps,
      };
    })
    .addCase(register, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    })
    .addCase(deleteCard, (state) => {
      return {
        ...state,
        deletingCard: true,
      };
    })
    .addCase(logout, (state, action) => {
      return {
          ...state,
          user:action.payload.loggedIn=false
         }
  });
});

export default authReducer;
