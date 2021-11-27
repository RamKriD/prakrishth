import React, { Fragment, useContext } from "react";

import UserContext from "../../services/UserContext";

function Profile(props) {
  const user = useContext(UserContext).user;
  return (
    <Fragment>
      <div>User Profile</div>

      {user ? (
        <Fragment>
          <div>
            <img src={user.picture} alt={user.nickname} />
          </div>
          <h2>{user.nickname}</h2>
          <p>{user.emails[0].value}</p>
        </Fragment>
      ) : (
        <Fragment>{"No User Signed in"}</Fragment>
      )}
    </Fragment>
  );
}

export default Profile;
