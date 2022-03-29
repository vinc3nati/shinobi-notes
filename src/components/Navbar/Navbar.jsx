import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_2.png";
import { FaSearch } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { ACTIONS, FILTERS } from "../../utils/constants";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Account } from "../Account/Account";
import { useShrinkSidebar } from "../../contexts/shrink-sidebar-context";

export const Navbar = () => {
  const {
    user: { user },
    handleLogOut,
  } = useAuth();
  const { state, dispatch } = useData();
  const { toggleShrink } = useShrinkSidebar();

  return (
    <nav className="navbar">
      <BiMenuAltLeft className="menu" onClick={toggleShrink} />
      <div className="main">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="img img-responsive" />
          </Link>
        </div>
        <div className="search-bar">
          <button type="submit" className="btn tertiary">
            <FaSearch />
          </button>
          <div className="input-grp">
            <input
              type="search"
              value={state.filters.search}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.ChangeFilters,
                  payload: {
                    type: FILTERS.Search,
                    value: e.target.value,
                  },
                })
              }
              placeholder="search"
            />
          </div>
        </div>
        <ThemeSwitcher />
        <Account />
      </div>
    </nav>
  );
};
