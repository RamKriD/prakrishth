import React, { Fragment } from "react";
import LocalizationContext from "../../services/LocalizationContext";

function Utkrishth(props) {
  const locales = React.useContext(LocalizationContext)
  return (
    <Fragment>
      <h4>{locales.strings.utkrishth}</h4>
    </Fragment>
  );
}

export default Utkrishth;
