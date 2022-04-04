import React from "react";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { NoteEditor } from "../../components/NoteEditor/NoteEditor";
import { DisplayNotes } from "../../components/DisplayNotes/DisplayNotes";

export const Notes = ({ title }) => {
  useDocumentTitle(title);

  return (
    <>
      <NoteEditor />
      <DisplayNotes />
    </>
  );
};
