import axios from "axios";

const API = {
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/signup",
  NOTES: "/api/notes",
  ARCHIVE_NOTES: "/api/archives",
  POST_ARCHIVE_NOTES: "/api/notes/archives",
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

export const getArchives = async ({ token }) =>
  await axios.get(API.ARCHIVE_NOTES, {
    headers: {
      authorization: token,
    },
  });

export const postArchives = async ({ notesId, token, note }) =>
  await axios.post(
    `${API.POST_ARCHIVE_NOTES}/${notesId}`,
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const restoreArchives = async ({ notesId, token }) =>
  await axios.post(
    `${API.ARCHIVE_NOTES}/restore/${notesId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteArchives = async ({ notesId, token }) =>
  await axios.delete(`${API.ARCHIVE_NOTES}/delete/${notesId}`, {
    headers: {
      authorization: token,
    },
  });
