import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_2.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { ACTIONS, FILTERS } from "../../utils/constants";

export const Navbar = () => {
  const {
    user: { user },
    handleLogOut,
  } = useAuth();
  const { state, dispatch } = useData();

  return (
    <nav className="navbar">
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

        <div className="nav-links">
          <Link to="/wishlist" className="badge">
            <AiFillSetting className="badge-icon" />
          </Link>
        </div>
      </div>
      <div className="user">
        <button className="btn warning icon-btn" onClick={() => handleLogOut()}>
          <FaUserCircle />
          {user.name.split(" ")[0]}
        </button>
      </div>
    </nav>
  );
};
