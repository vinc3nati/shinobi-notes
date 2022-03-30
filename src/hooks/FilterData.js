import { useData } from "../contexts";
import { filterBySearch, sortNotes } from "../utils/notesFilter";

export const useFilteredData = () => {
  const {
    state: {
      filters: { sortBy, search },
      notes,
    },
  } = useData();

  const searchResult = filterBySearch(notes, search);
  const sortedData = sortNotes(searchResult, sortBy);

  return { sortedData };
};