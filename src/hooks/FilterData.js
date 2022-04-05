import { useData } from "../contexts";
import {
  filterBySearch,
  sortByPriority,
  sortNotes,
} from "../utils/notesFilter";

export const useFilteredData = () => {
  const {
    state: {
      filters: { sortBy, search, priority },
      notes,
    },
  } = useData();

  const searchResult = filterBySearch(notes, search);
  const prioritizedData = sortByPriority(searchResult, priority);
  const sortedData = sortNotes(prioritizedData, sortBy);
  return { sortedData };
};
