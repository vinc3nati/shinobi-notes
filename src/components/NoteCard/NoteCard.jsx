import React, { useState } from "react";
import { FaTrash, FaEdit, FaArchive, FaTrashRestore } from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import {
  restoreArchives,
  postArchives,
  deleteNotes,
  deleteArchives,
} from "../../services/user.service";
import { ACTIONS } from "../../utils/constants";

export const NoteCard = ({ operations, isTag }) => {
  const [disabled, setDisabled] = useState(false);

  const {
    user: { token },
  } = useAuth();
  const {
    state: { archives },
    dispatch,
  } = useData();
  const { _id, tag, title, body, createdAt, backgroundColor } = operations.note;
  const isArchived = archives.some((item) => item._id === _id);

  const handleDelete = async () => {
    setDisabled(true);
    const response = await deleteNotes({ notesId: _id, token });
    if (response.data.notes) {
      dispatch({
        type: ACTIONS.SetNotes,
        payload: { notes: response.data.notes },
      });
      setDisabled(false);
    }
  };

  const handleArchive = async () => {
    setDisabled(true);
    let response = null;
    if (isArchived)
      response = await restoreArchives({
        notesId: _id,
        token,
      });
    else
      response = await postArchives({
        notesId: _id,
        token,
        note: operations.note,
      });
    if (response && response.data.archives) {
      dispatch({
        type: ACTIONS.SetArchives,
        payload: {
          archives: response.data.archives,
          notes: response.data.notes,
        },
      });
      setDisabled(false);
    }
  };

  const handleDeleteArchives = async () => {
    setDisabled(true);
    const response = await deleteArchives({ notesId: _id, token });
    if (response.data.archives) {
      dispatch({
        type: ACTIONS.SetArchives,
        payload: {
          archives: response.data.archives,
        },
      });
      setDisabled(false);
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor }} className="note-card">
      {!isTag && <span className="note-card-tag">{tag}</span>}
      <header className="note-header">
        <span className="note-card-heading"> {title} </span>
        {!isArchived && (
          <FaArchive
            className="archive"
            style={disabled && { userSelect: "none", pointerEvents: "none" }}
            onClick={() => handleArchive()}
          />
        )}
      </header>
      <p className="note-card-body">{body}</p>
      <p className="note-card-time">Created At: {createdAt}</p>
      <footer className="note-card-footer">
        <button
          className="btn outline-error"
          disabled={disabled}
          onClick={() => (isArchived ? handleDeleteArchives() : handleDelete())}
        >
          <FaTrash />
        </button>
        {!isTag && (
          <button
            disabled={disabled}
            className="btn warning"
            onClick={() =>
              isArchived ? handleArchive() : operations.setNote(operations.note)
            }
          >
            {isArchived ? <FaTrashRestore /> : <FaEdit />}
          </button>
        )}
      </footer>
    </div>
  );
};
