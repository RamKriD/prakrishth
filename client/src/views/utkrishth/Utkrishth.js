import React, { useState, Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "bold",
      "italic",
      "underline",
      "alignment",
      "bulletedList",
      "numberedList",
      "outdent",
      "indent",
      "link",
      "blockQuote",
      "imageUpload",
      "imageInsert",
      "insertTable",
      "mediaEmbed",
      "fontFamily",
      "fontBackgroundColor",
      "fontColor",
      "fontSize",
      "highlight",
      "strikethrough",
      "subscript",
      "superscript",
      "codeBlock",
      "code",
      "horizontalLine",
      "htmlEmbed",
      "pageBreak",
      "removeFormat",
      "specialCharacters",
      "undo",
      "redo",
    ],
    shouldNotGroupWhenFull: true,
  },
  language: {
    ui: "en",
    content: "hi",
  },
  fontFamily: {
    options: [
      "Default",
      "PoppinsRegular",
      "Arial",
      "Courier New",
      "Times New Roman",
    ],
    supportAllValues: true,
  },
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
};

const contentConfig = { readOnly: true };

function Utkrishth(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [value, setValue] = useState(null);
  let contentEditor = null;
  let contentViewer = null;
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
        <div className="App">
          <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);

              // Insert the toolbar before the editable area.
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
              contentEditor = editor;
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
              setValue(editor.getData());
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
            onError={({ willEditorRestart }) => {
              // If the editor is restarted, the toolbar element will be created once again.
              // The `onReady` callback will be called again and the new toolbar will be added.
              // This is why you need to remove the older toolbar.
              if (willEditorRestart) {
                contentEditor.ui.view.toolbar.element.remove();
              }
            }}
          />
        </div>
        <div className="ck-content">
          <CKEditor
            editor={Editor}
            data={value}
            disabled={true}
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
