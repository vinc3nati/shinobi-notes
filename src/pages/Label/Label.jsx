import React from "react";
import { useNavigate } from "react-router-dom";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useData } from "../../contexts";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Label = ({ tag }) => {
  useDocumentTitle(tag);
  const {
    state: { notes },
  } = useData();
  const labelledNotes = notes.filter((item) => item.tag.includes(tag));
  let navigate = useNavigate();
  const handleTagDelete = () => {
    if (labelledNotes.length === 1) {
      navigate("/notes");
    }
  };

  return (
    <div className="label-container">
      {labelledNotes &&
        labelledNotes.map((note) => (
          <NoteCard
            key={note._id}
            operations={{ note }}
            tagOperation={handleTagDelete}
          />
        ))}
      {!labelledNotes.length && (
        <div className="text-center">
          <h2>Nothing in {tag}, try adding some notes!</h2>
          <button className="btn warning" onClick={() => navigate("/notes")}>
            add notes
          </button>
        </div>
      )}
    </div>
  );
};
