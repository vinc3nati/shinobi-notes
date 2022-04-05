import React from "react";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useData } from "../../contexts";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Trash = ({ title }) => {
  useDocumentTitle(title);
  const {
    state: { trash },
  } = useData();
  return (
    <>
      {trash.length === 0 && (
        <h2 className="highlight text-center">Nothing in Trash Yet!</h2>
      )}
      <div className="trash-container">
        {trash.map((note) => (
          <NoteCard key={note._id} operations={{ note }} isTrash={true} />
        ))}
      </div>
    </>
  );
};
