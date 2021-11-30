import React, { Fragment, useContext } from "react";

import UserContext from "../../services/UserContext";
import LocalizationContext from "../../services/LocalizationContext";

function Profile(props) {
  const user = useContext(UserContext).user;
  const locales = React.useContext(LocalizationContext)
  return (
    <Fragment>
      <div>{locales.strings.profile}</div>

      {user ? (
        <Fragment>
          <div>
            <img src={user.picture} alt={user.nickname} />
          </div>
          <h2>{user.nickname}</h2>
          <p>{user.emails[0].value}</p>
        </Fragment>
      ) : (
        <Fragment>{locales.strings.noUser}</Fragment>
      )}
    </Fragment>
  );
}

export default Profile;
