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
  Priority: "priority",
};

const SortBY = {
  Ascending: "Latest-First",
  Descending: "Oldest-First",
};

const Priority = {
  PriorityLow: "Low",
  PriorityMedium: "Medium",
  PriorityHigh: "High",
};

export { ACTIONS, FILTERS, SortBY, Priority };
