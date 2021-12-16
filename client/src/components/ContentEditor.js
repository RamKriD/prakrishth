import React, { useState, Fragment } from "react";

import { Editor } from "@tinymce/tinymce-react";

export default function ContentEditor(props) {
  const handleEditorChange = (e) => {
    props.onChange(e.target.getContent());
  };

  return (
    <Fragment>
      <Editor
        initialValue={props.defaultValue || "<p>Click to edit your post</p>"}
        apiKey="yzja036u6jwr641tjnm8rsau9r4p3x2swl1391h7drgowwp9"
        init={{
          selector: "#editor",
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
      alignleft aligncenter alignright | \
      bullist numlist outdent indent",
        }}
        onChange={handleEditorChange}
      />
    </Fragment>
  );
}
