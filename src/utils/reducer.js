import React, { useReducer } from "react";
import { ACTIONS } from "./constants";

export const initialValue = {
  notes: [],
  archives: [],
  trash: [],
  tags: [],
  filters: {
    sortBy: "",
    search: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SetNotes:
      return {
        ...state,
        notes: [...action.payload.notes],
        tags: action.payload.notes.reduce(
          (acc, curr) => (acc.includes(curr.tag) ? acc : [...acc, curr.tag]),
          []
        ),
      };

    case ACTIONS.SetArchives:
      return {
        ...state,
        archives: [...action.payload.archives],
        notes: action.payload.notes ? [...action.payload.notes] : state.notes,
      };

    case ACTIONS.SetTrash:
      return {
        ...state,
        trash: [...action.payload.trash],
      };

    case ACTIONS.ChangeFilters:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.value,
        },
      };

    case ACTIONS.ClearFilters:
      return {
        ...state,
        filters: { ...initialValue.filters },
      };

    default:
      return state;
  }
};
