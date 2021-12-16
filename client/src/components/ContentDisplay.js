import React, { Fragment } from "react";

import { Editor } from "@tinymce/tinymce-react";

export default function ContentDisplay(props) {
  return (
    <Fragment>
      <Editor readonly={1} inline={true} init={{
          selector: "#content",
          menubar: false,
          readonly: 1,
          inline: true
        }} value={props.defaultValue}/>
    </Fragment>
  );
}
