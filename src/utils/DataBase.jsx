import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import  authActions  from "../redux/actions/authActions";

axios.defaults.baseURL = "http://localhost:8080";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/clients/current", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserData(response.data);
        dispatch(authActions.current(response.data));
        dispatch(authActions.login(localStorage.getItem("token")));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  return userData;
};

export default useUserData;





