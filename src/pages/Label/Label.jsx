import React from "react";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useData } from "../../contexts";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Label = ({ tag }) => {
  useDocumentTitle(tag);
  const {
    state: { notes },
  } = useData();
  const labelledNotes = notes.filter((item) => item.tag === tag);
  return (
    <div className="label-container">
      {labelledNotes.map((note) => (
        <NoteCard key={note._id} operations={{ note }} isTag={true} />
      ))}
    </div>
  );
};
