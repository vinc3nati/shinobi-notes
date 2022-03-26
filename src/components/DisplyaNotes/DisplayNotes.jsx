import React, { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { deleteNotes, editNotes, postNotes } from "../../services/user.service";
import { ACTIONS } from "../../utils/constants";
import { NoteCard } from "../NoteCard/NoteCard";

export const DisplayNotes = () => {
  const date = new Date();
  const initVal = {
    _id: "",
    title: "",
    body: "",
    backgroundColor: "#000000",
    createdAt: `${date.getDate()}/0${
      date.getMonth() + 1
    }/${date.getFullYear()}`,
  };
  const [note, setNote] = useState(initVal);
  const [expand, setExpand] = useState(false);
  const {
    user: { token },
  } = useAuth();
  const { state, setLoader, dispatch } = useData();

  const activeNote = () => setExpand(true);

  const hideNote = () => setExpand(false);

  const handleChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (!note._id) {
      const response = await postNotes({ token, note });
      if (response.data.notes) {
        dispatch({
          type: ACTIONS.SetNotes,
          payload: { notes: response.data.notes },
        });
      }
    } else {
      const editResponse = await editNotes({ notesId: note._id, note, token });
      if (editResponse.data.notes) {
        dispatch({
          type: ACTIONS.SetNotes,
          payload: { notes: editResponse.data.notes },
        });
      }
    }
    setNote(initVal);
    setLoader(false);
  };

  const handleDelete = async (noteId) => {
    setLoader(true);
    const response = await deleteNotes({ notesId: noteId, token });
    if (response.data.notes) {
      dispatch({
        type: ACTIONS.SetNotes,
        payload: { notes: response.data.notes },
      });
    }
    setLoader(false);
  };

  return (
    <main className="main-notes">
      <form className="notes-form" onSubmit={handleSubmit}>
        {expand && (
          <div className="input-grp">
            <input
              name="title"
              value={note.title}
              onChange={handleChange}
              required
              type="text"
              placeholder="Title"
            />
          </div>
        )}
        <textarea
          className="input-area"
          name="body"
          required
          autoComplete="off"
          value={note.body}
          onChange={handleChange}
          placeholder={expand ? "Description" : "Click to add a note"}
          onClick={activeNote}
          onDoubleClick={hideNote}
        />
        {expand && (
          <footer className="note-footer">
            <input
              value={note.backgroundColor}
              type="color"
              name="backgroundColor"
              onChange={handleChange}
            />
            <button className="btn outline-warning" type="submit">
              {note._id ? "Update" : "Add"}
            </button>
          </footer>
        )}
      </form>
      <div className="note-card-container">
        {state.notes.map((note) => (
          <NoteCard
            key={note._id}
            operations={{ note, setNote, handleDelete }}
          />
        ))}
      </div>
    </main>
  );
};
