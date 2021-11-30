import React from "react";
import LocalizationContext from "../../services/LocalizationContext";

function Shashtrarth(props) {
  const locales = React.useContext(LocalizationContext)
  return (
    <div className="ck-content">
      {locales.strings.shashtrarth}
    </div>
  );
}
 
export default Shashtrarth;
