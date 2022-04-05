import React, { useState } from "react";
import { FaTrash, FaEdit, FaArchive } from "react-icons/fa";
import { MdRestore } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import {
  restoreArchives,
  postArchives,
  deleteNotes,
  deleteArchives,
  deleteTrash,
  restoreTrash,
  postTrash,
} from "../../services/user.service";
import { ACTIONS } from "../../utils/constants";

export const NoteCard = ({ operations, tagOperation, isTrash }) => {
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleDelete = async () => {
    setDisabled(true);
    if (!isTrash) {
      if (isArchived) {
        const response = await deleteArchives({ notesId: _id, token });
        if (response.data.archives) {
          dispatch({
            type: ACTIONS.SetArchives,
            payload: {
              archives: response.data.archives,
            },
          });
        }
      } else {
        const response = await postTrash({
          notesId: _id,
          note: operations.note,
          token,
        });
        if (response.data.trash) {
          dispatch({
            type: ACTIONS.SetTrash,
            payload: { trash: response.data.trash, notes: response.data.notes },
          });
        }
      }
      setDisabled(false);
      return;
    }
    const response = await deleteTrash({ notesId: _id, token });
    if (response.data.trash) {
      dispatch({
        type: ACTIONS.SetTrash,
        payload: { trash: response.data.trash },
      });
      setDisabled(false);
      if (tagOperation) {
        tagOperation();
      }
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

  const handleRestoreTrash = async () => {
    setDisabled(true);
    const response = await restoreTrash({
      notesId: _id,
      token,
      note: operations.note,
    });
    if (response.data.trash) {
      dispatch({
        type: ACTIONS.SetTrash,
        payload: { trash: response.data.trash, notes: response.data.notes },
      });
    }
    setDisabled(false);
  };

  const handleEdit = () => {
    if (pathname === "/notes") {
      navigate(`/notes/${_id}`);
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor }} className="note-card">
      {!tagOperation && tag && <span className="note-card-tag">{tag}</span>}
      <header className="note-header">
        <span className="note-card-heading"> {title} </span>
        {!isArchived &&
          (!isTrash ? (
            <FaArchive
              className="side-icon"
              style={disabled && { userSelect: "none", pointerEvents: "none" }}
              onClick={handleArchive}
            />
          ) : (
            <MdRestore
              className="side-icon"
              style={disabled && { userSelect: "none", pointerEvents: "none" }}
              onClick={handleRestoreTrash}
            />
          ))}
      </header>
      <div
        className="note-card-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <p className="note-card-time">Created At: {createdAt}</p>
      <footer className="note-card-footer">
        <button
          className="btn outline-error"
          disabled={disabled}
          onClick={handleDelete}
        >
          <FaTrash />
        </button>
        {!tagOperation && !isTrash && (
          <button
            disabled={disabled}
            className="btn warning"
            onClick={() => (isArchived ? handleArchive() : handleEdit())}
          >
            {isArchived ? <MdRestore /> : <FaEdit />}
          </button>
        )}
      </footer>
    </div>
  );
};
