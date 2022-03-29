import React from "react";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Archives = ({ title }) => {
  useDocumentTitle(title);
  const {
    state: { archives },
  } = useData();
  return (
    <>
      {archives.length === 0 && (
        <h2 className="highlight text-center">No Notes Archived Yet!</h2>
      )}
      <div className="archives-container">
        {archives.map((note) => (
          <NoteCard key={note._id} operations={{ note }} />
        ))}
      </div>
    </>
  );
};
