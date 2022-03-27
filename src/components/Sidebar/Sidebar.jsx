import React from "react";
import { FaLightbulb, FaArchive, FaTrash } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-link active">
          <FaLightbulb />
          <p>Note</p>
        </li>
        <li className="sidebar-link">
          <FaArchive />
          <p>Archive</p>
        </li>
        <li className="sidebar-link">
          <FaTrash />
          <p>Trash</p>
        </li>
      </ul>
    </aside>
  );
};
