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
      return { ...state, notes: [...action.payload.notes] };

    case ACTIONS.ChangeFilters:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.value,
        },
      };
  }
};
