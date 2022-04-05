import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image", "video"],
  ],
};

export const QuillEditor = ({ value, setValue, onFocus }) => {
  return (
    <ReactQuill
      modules={modules}
      placeholder="Take Notes...."
      value={value}
      defaultValue=""
      onChange={setValue}
      onFocus={onFocus}
    />
  );
};
