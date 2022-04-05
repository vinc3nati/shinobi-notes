import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/ClickOutside";
import { AiFillFilter } from "react-icons/ai";
import { ACTIONS, FILTERS, Priority, SortBY } from "../../utils/constants";
import { useData } from "../../contexts";

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const {
    state: { filters },
    dispatch,
  } = useData();
  const toggleDropdown = () => setOpen((prev) => !prev);

  useOnClickOutside(dropdownRef, () => setOpen(false));
  return (
    <div ref={dropdownRef} className="filter">
      <AiFillFilter className="filter-icon" onClick={toggleDropdown} />
      {open && (
        <div className="filter-dropdown">
          <p className="text-bold highlight">Sort By</p>
          {Object.values(SortBY).map((filter) => (
            <div className="radio-grp" key={filter}>
              <input
                type="radio"
                name="filter-radio"
                id={filter + "-radio"}
                value={filter}
                checked={filters.sortBy === filter ? true : false}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.ChangeFilters,
                    payload: {
                      type: FILTERS.SortBy,
                      value: filter,
                    },
                  })
                }
              />
              <label htmlFor={filter + "-radio"}>
                <span className="radio-btn"></span>
                <span>Filter-{filter}</span>
              </label>
            </div>
          ))}
          <p className="text-bold highlight">Priority</p>
          {Object.values(Priority).map((priority) => (
            <div className="radio-grp" key={priority}>
              <input
                type="radio"
                name="priority-radio"
                id={priority + "-radio"}
                value={priority}
                checked={filters.priority === priority ? true : false}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.ChangeFilters,
                    payload: {
                      type: FILTERS.Priority,
                      value: priority,
                    },
                  })
                }
              />
              <label htmlFor={priority + "-radio"}>
                <span className="radio-btn"></span>
                <span>{priority}</span>
              </label>
            </div>
          ))}
          <p
            className="filter-clear"
            onClick={() => dispatch({ type: ACTIONS.ClearFilters })}
          >
            Clear
          </p>
        </div>
      )}
    </div>
  );
};
