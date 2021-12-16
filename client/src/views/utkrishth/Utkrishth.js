import React, { Fragment, useState } from "react";
import LocalizationContext from "../../services/LocalizationContext";
import ContentEditor from "../../components/ContentEditor";
import ContentDisplay from "../../components/ContentDisplay";

function Utkrishth(props) {
  const locales = React.useContext(LocalizationContext);
  const [blogValue, setBlogValue] = useState("");
  const handleChange = (newData) => {
    console.log(newData)
    setBlogValue(newData)
  }
  return (
    <Fragment>
      <h4>{locales.strings.utkrishth}</h4>
      <div >
        <ContentEditor onChange={handleChange}/>
      </div>
      <div>
        <ContentDisplay defaultValue={blogValue} />
      </div>
    </Fragment>
  );
}

export default Utkrishth;
