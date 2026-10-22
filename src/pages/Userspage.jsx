import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from "../components/UserCard"; 
import { axiosInstance } from "../config/axoisInstance";

const Userspage = () => {
  const [usersData, setUsersData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  let getUsersData = async () => {
    try {
      let res = await axiosInstance.get("/users");
      console.log(res.data);
      setUsersData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log("errors in user api", err);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);
  if(isLoading) return <div className="text-center text-2xl font-bold">Loading...</div>
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {usersData.map((val) => {
        return <UserCard key={val.id} user={val} />;
      })}
    </div>
  );
};

export default Userspage;
