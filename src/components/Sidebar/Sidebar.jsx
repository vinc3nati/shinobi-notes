import React from "react";
import { FaLightbulb, FaArchive, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          end
        >
          <FaLightbulb />
          <p>Note</p>
        </NavLink>
        <NavLink
          to="/archives"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          end
        >
          <FaArchive />
          <p>Archive</p>
        </NavLink>
        <NavLink
          to="/trash"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          end
        >
          <FaTrash />
          <p>Trash</p>
        </NavLink>
      </ul>
    </aside>
  );
};
