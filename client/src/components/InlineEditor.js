import React, { Fragment } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import UploadAdapter from "./../services/UploadAdapter";
import { FormatColorResetOutlined } from "@mui/icons-material";
import CustomEditor from "ckeditor-custom-build/build/ckeditor";

const editorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "alignment",
      "|",
      "numberedList",
      "bulletedList",
      "|",
      "outdent",
      "indent",
      "|",
      "todoList",
      "link",
      "blockQuote",
      "imageInsert",
      "insertTable",
      "mediaEmbed",
      "|",
      "undo",
      "redo",
      "code",
      "codeBlock",
      "findAndReplace",
      "highlight",
      "horizontalLine",
      "removeFormat",
      "restrictedEditingException",
      "subscript",
      "superscript",
      "specialCharacters",
      "textPartLanguage",
    ],
    shouldNotGroupWhenFull: false,
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "linkImage",
    ],
  },
  mediaEmbed: {
    extraProviders: [
      {
        name: "ckeditor",
        url: /^ckeditor\.com/,
      },
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

function CustomInlineEditor(props) {
  return (
    <Fragment>
      <div style={{ width: "100%", maxWidth: "100%" }}>
        <CKEditor
          editor={CustomEditor}
          data={props.data}
          disabled={props.isReadOnly ? true : false}
          onReady={(editor) => {
            if (!props.isReadOnly) {
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }
            editor.isReadOnly = props.isReadOnly ? true : false;
            editor.plugins.get("FileRepository").createUploadAdapter =
              function (loader) {
                console.log(btoa(loader.file));
                return new UploadAdapter(loader);
              };
          }}
          onChange={(event, editor) => {
            props.onChange ? props.onChange(event, editor) : console.log("");
          }}
          onBlur={(event, editor) => {
            props.onBlur ? props.onBlur(event, editor) : console.log("");
          }}
          onFocus={(event, editor) => {
            props.onFocus ? props.onFocus(event, editor) : console.log("");
          }}
          onError={(event, editor) => {
            console.log(event);
            console.log("error occured ", editor);
          }}
        />
      </div>
    </Fragment>
  );
}

export default CustomInlineEditor;
