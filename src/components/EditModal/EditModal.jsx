import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/ClickOutside";
import { NoteEditor } from "../NoteEditor/NoteEditor";

export const EditModal = () => {
  const editorModalRef = useRef();
  const { noteId } = useParams();
  const navigate = useNavigate();

  useOnClickOutside(editorModalRef, () => navigate("/notes"));

  return (
    <div className="editor-modal">
      <div ref={editorModalRef}>
        <NoteEditor id={noteId} />
      </div>
    </div>
  );
};
