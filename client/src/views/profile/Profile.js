import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);
  return (
    isAuthenticated && (
      <Fragment>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Fragment>
    )
  );
}

export default Profile;