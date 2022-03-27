import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

export const NoteCard = ({ operations }) => {
  const { note, setNote, handleDelete } = operations;
  const { _id, title, body, createdAt, backgroundColor } = note;
  return (
    <div style={{ backgroundColor: backgroundColor }} className="note-card">
      <header className="note-card-heading">{title}</header>
      <p className="note-card-body">{body}</p>
      <p className="note-card-time">Created At: {createdAt}</p>
      <footer className="note-card-footer">
        <button className="btn outline-error" onClick={() => handleDelete(_id)}>
          <FaTrash />
        </button>
        <button className="btn warning" onClick={() => setNote(note)}>
          <FaEdit />
        </button>
      </footer>
    </div>
  );
};
