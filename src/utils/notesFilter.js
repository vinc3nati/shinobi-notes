import { SortBY } from "./constants";

export const filterBySearch = (data, searchQuery) => {
  if (searchQuery === "") return data;

  return data.filter((el) => el.title.toLowerCase().includes(searchQuery));
};

export const sortByPriority = (data, priority) => {
  if (priority === "") return data;
  return data.filter((item) => item.priority === priority);
};

export const sortNotes = (data, sortBy) => {
  return [...data].sort((a, b) =>
    SortBY.Ascending === sortBy
      ? a.timestamp - b.timestamp
      : b.timestamp - a.timestamp
  );
};
