import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleShow = () => {
    const scrolled = window.scrollY;
    if (scrolled <= 100) {
      setShowButton(false);
    } else if (scrolled > 100) {
      setShowButton(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleShow);

  return (
    <>
      {showButton && (
        <button
          title="Top"
          className="btn warning scroll-btn"
          onClick={scrollToTop}
        >
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};
