import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Shashtrarth(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);
  return (
    
    <h6>Shashtrarth</h6>
  );
}

export default Shashtrarth;