import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LandingPage(props) {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims} = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if(isAuthenticated) {
    console.log(user);
    getAccessTokenSilently().then(function(data) {
      console.log('accessToken')
      console.log(data)
    }, function(error) {
      console.log(error)
    })
    getIdTokenClaims().then(function(data) {
      console.log('getIdTokenClaims')
      console.log(data)
    }, function(error) {
      console.log(error)
    })
    return (
      <Fragment>
        Authenticated
      </Fragment>
    )
  }
  return (
    <Fragment>
      
    <h6>LandingPage</h6>
    </Fragment>
  );
}

export default LandingPage;
