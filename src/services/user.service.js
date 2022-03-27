import axios from "axios";

const API = {
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/signup",
  NOTES: "/api/notes",
  GET_ARCHIVE_NOTES: "/api/archives",
  POST_ARCHIVE_NOTES: "/notes/archives",
  DELETE_ARCHIVE_NOTES: "/api/archives/delete",
};

export const loginUser = async ({ email, password }) =>
  await axios.post(API.LOGIN, {
    email,
    password,
  });

export const signupUser = async ({ name, email, password }) =>
  await axios.post(API.REGISTER, {
    email,
    password,
    name,
  });

export const getNotes = async ({ token }) =>
  await axios.get(API.NOTES, {
    headers: {
      authorization: token,
    },
  });

export const postNotes = async ({ note, token }) =>
  await axios.post(
    API.NOTES,
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editNotes = async ({ notesId, note, token }) =>
  await axios.post(
    `${API.NOTES}/${notesId}`,
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteNotes = async ({ notesId, token }) =>
  await axios.delete(`${API.NOTES}/${notesId}`, {
    headers: {
      authorization: token,
    },
  });
