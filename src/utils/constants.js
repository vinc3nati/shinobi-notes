const ACTIONS = {
  SetNotes: "SET_NOTES",
  SetArchives: "SET_ARCHIVES",
  SetTrash: "SET_TRASH",
  ChangeFilters: "CHANGE_FILTERS",
  ClearFilters: "CLEAR_FILTERS",
};

const FILTERS = {
  SortBy: "sortBy",
  Search: "search",
};

const SortBY = {
  Ascending: "Latest-First",
  Descending: "Oldest-First",
};

export { ACTIONS, FILTERS, SortBY };
