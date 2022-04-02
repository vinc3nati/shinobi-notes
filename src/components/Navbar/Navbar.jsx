import React from "react";
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
import { Filter } from "../Filter/Filter";

export const Navbar = () => {
  const { state, dispatch } = useData();
  const { toggleShrink } = useShrinkSidebar();

  return (
    <nav className="navbar">
      <div className="main">
        <div className="header">
          <BiMenuAltLeft className="menu" onClick={toggleShrink} />
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="img img-responsive" />
            </Link>
          </div>
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
                    value: e.target.value.toLowerCase(),
                  },
                })
              }
              placeholder="search"
            />
          </div>
          <Filter />
        </div>
        <ThemeSwitcher />
        <Account />
      </div>
    </nav>
  );
};
