import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPin, BsPinFill } from "react-icons/bs";
import { useAuth, useData } from "../../contexts";
import { editNotes, postNotes } from "../../services/user.service";
import { ACTIONS } from "../../utils/constants";
import { QuillEditor } from "../QuillEditor/QuillEditor";
import { TagInputs } from "../TagInputs/TagInputs";

export const NoteEditor = ({ id }) => {
  const date = new Date();
  const initVal = {
    _id: "",
    title: "",
    body: "",
    tag: [],
    priority: "Low",
    backgroundColor: "#000000",
    isPinned: false,
    createdAt: `${date.getDate()}/0${
      date.getMonth() + 1
    }/${date.getFullYear()}`,
    timestamp: date.getTime(),
  };
  const {
    user: { token },
  } = useAuth();
  const {
    state: { notes, tags },
    setLoader,
    dispatch,
  } = useData();
  const navigate = useNavigate();
  const noteToDisplay = notes.filter((item) => item._id === id)[0];
  const [note, setNote] = useState(id ? noteToDisplay : initVal);
  const [expand, setExpand] = useState(false);

  const activeNote = () => setExpand(true);

  const hideNote = () => setExpand(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      name === "tag" ? e.target.value.toLowerCase() : e.target.value;
    setNote({ ...note, [name]: value });
  };

  const addTag = (e, tag) => {
    if (e.target.checked) {
      setNote((prev) => ({ ...prev, tag: prev.tag.concat(tag) }));
    } else {
      setNote((prev) => ({
        ...prev,
        tag: prev.tag.filter((tg) => tg !== tag),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (!id) {
      const response = await postNotes({ token, note });
      if (response.data.notes) {
        dispatch({
          type: ACTIONS.SetNotes,
          payload: { notes: response.data.notes },
        });
      }
    } else {
      const editResponse = await editNotes({ notesId: id, note, token });
      if (editResponse.data.notes) {
        dispatch({
          type: ACTIONS.SetNotes,
          payload: { notes: editResponse.data.notes },
        });
        navigate("/notes");
      }
    }
    setNote((prev) => ({
      ...prev,
      backgroundColor: "#000000",
      title: "",
      tag: [],
      isPinned: false,
      priority: "Low",
      timestamp: date.getTime(),
    }));
    setNote((prev) => ({ ...prev, body: "" }));
    setLoader(false);
  };
  return (
    <form
      className="notes-form"
      onSubmit={handleSubmit}
      onDoubleClick={hideNote}
    >
      {expand && (
        <div className="note-header">
          <div className="input-grp">
            <input
              name="title"
              className="input-title"
              autoComplete="off"
              value={note.title}
              onChange={(e) => {
                handleChange(e);
              }}
              required
              type="text"
              placeholder="Title"
            />
          </div>
          <span
            className="pin-icon"
            onClick={() =>
              setNote((prev) => ({ ...prev, isPinned: !prev.isPinned }))
            }
          >
            {note.isPinned ? <BsPinFill /> : <BsPin />}
          </span>
        </div>
      )}
      <QuillEditor
        value={note.body}
        setValue={(e) => setNote({ ...note, body: e })}
        onFocus={activeNote}
        isExpanded={expand}
      />
      {expand && (
        <>
          <div className="tag-chip-container">
            {note.tag &&
              note.tag.map((item) => (
                <div key={item} className="tag-chip">
                  {item}
                </div>
              ))}
          </div>
          <footer className="note-footer">
            <div className="input-container">
              <TagInputs handleChange={addTag} tag={note.tag} />
              <input
                value={note.backgroundColor}
                type="color"
                name="backgroundColor"
                onChange={handleChange}
              />
              <select
                onChange={handleChange}
                value={note.priority}
                name="priority"
                className="input-dropdown"
              >
                <option value="Low" selected>
                  Low
                </option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <button className="btn outline-warning" type="submit">
              {id ? "Update" : "Add"}
            </button>
          </footer>
        </>
      )}
    </form>
  );
};
