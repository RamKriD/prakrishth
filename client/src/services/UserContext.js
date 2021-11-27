import React, { createContext, useEffect, useState } from "react";
import client from "./dataService";

const UserContext = createContext({
  user: null,
});

export function UserContextProvider(props) {
  const [activeUser, setActiveUser] = useState(null);

  let user = document.cookie.split("=")[1];
  useEffect(function () {
    if (user && !activeUser) {
      client.post("/users/activeUser").then((result) => {
        console.log(result);
        setActiveUser(result.userProfile);
      });
    }
  }, []);

  const context = {
    user: activeUser,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
