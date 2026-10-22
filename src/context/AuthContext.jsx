import { useState } from "react";
import { createContext } from "react";

export let Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setregisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [], //if no registered users, then set it to empty array
  );
  const [loggedInUser, setloggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,//if no logged in user, then set it to null
  );

  console.log(registeredUsers);
  console.log(loggedInUser);

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setregisteredUsers,
        loggedInUser,
        setloggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
