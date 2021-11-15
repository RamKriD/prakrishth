import React, { useState, Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import InlineEditor from "../../components/InlineEditor";
import { Button } from "@mui/material";

function Utkrishth(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
  }

  if (isLoading) {
    return (
      <Fragment>
        <h6>Loading</h6>
      </Fragment>
    );
  }
  if (isAuthenticated) {
    return (
      <Fragment>
        <h3>Utkrishth</h3>
        <Button onClick={()=>handleSubmit()}>Save</Button>
        <div className="App">
          <InlineEditor
            data={value}
            onChange={function (event, editor) {
              const data = editor.getData();
              console.log({ event, editor, data });
              setValue(editor.getData());
            }}
            onBlur={function (event, editor) {
              console.log("Blur.", editor);
              console.log(editor.getData());
              setValue(editor.getData());
            }}
            onFocus={function (event, editor) {
              console.log("Focus.", editor);
              console.log(editor.getData());
            }}
          />
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h4>Utkrishth</h4>
    </Fragment>
  );
}

export default Utkrishth;
