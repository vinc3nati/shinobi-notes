import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts";
import { useOnClickOutside } from "../../hooks/ClickOutside";
import { IoIosArrowDown } from "react-icons/io";

export const Account = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const {
    user: { user, token },
    handleLogOut,
  } = useAuth();
  const toggleDropdown = () => setOpen((prev) => !prev);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  return (
    <div ref={dropdownRef} className="user" onClick={toggleDropdown}>
      <div className="account-name">
        <span className="text-bold">{user.name.split(" ")[0]}</span>
        <IoIosArrowDown />
      </div>
      {open && (
        <div className="account-dropdown text-center">
          <ul className="list">
            <li>Account</li>
            <li onClick={handleLogOut}>Sign Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};
