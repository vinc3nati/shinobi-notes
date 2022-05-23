import React from "react";
import { FaLightbulb, FaArchive, FaTrash } from "react-icons/fa";
import { MdLabel } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useData, useShrinkSidebar } from "../../contexts";

export const Sidebar = () => {
  const { shrink } = useShrinkSidebar();
  const {
    state: { tags },
  } = useData();
  return (
    <aside className="sidebar" style={{ maxWidth: shrink ? "50px" : "" }}>
      <ul className={shrink ? "sidebar-list m-1" : "sidebar-list"}>
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          style={
            shrink
              ? {
                  borderRadius: "50%",
                  width: "fit-content",
                  padding: "1.5rem",
                }
              : null
          }
          end
        >
          <FaLightbulb />
          <p className={shrink ? "hide" : ""}>Note</p>
        </NavLink>
        <NavLink
          to="/archives"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          style={
            shrink
              ? { borderRadius: "50%", width: "fit-content", padding: "1.5rem" }
              : null
          }
          end
        >
          <FaArchive />
          <p className={shrink ? "hide" : ""}>Archive</p>
        </NavLink>
        {tags.length !== 0 &&
          tags.map(
            (tag) =>
              tag && (
                <NavLink
                  key={tag}
                  to={`/${tag}`}
                  className={({ isActive }) =>
                    isActive ? "sidebar-link active" : "sidebar-link"
                  }
                  style={
                    shrink
                      ? {
                          borderRadius: "50%",
                          width: "fit-content",
                          padding: "1.5rem",
                        }
                      : null
                  }
                  end
                >
                  <MdLabel />
                  <p className={shrink ? "hide" : ""}>{tag}</p>
                </NavLink>
              )
          )}
        <NavLink
          to="/trash"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          style={
            shrink
              ? { borderRadius: "50%", width: "fit-content", padding: "1.5rem" }
              : null
          }
          end
        >
          <FaTrash />
          <p className={shrink ? "hide" : ""}>Trash</p>
        </NavLink>
      </ul>
    </aside>
  );
};
