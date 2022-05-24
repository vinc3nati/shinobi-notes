import { useState, useRef } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import { useOnClickOutside } from "../../hooks/ClickOutside";

const colors = [
  "color-note-bg",
  "color-note-1",
  "color-note-2",
  "color-note-3",
  "color-note-4",
  "color-note-5",
  "color-note-6",
  "color-note-7",
];

export const ColorPalette = ({ color, changeColor }) => {
  const [showPalette, setShowPalette] = useState(false);
  const paletteRef = useRef();
  const toggleShowPalette = () => setShowPalette((prev) => !prev);
  useOnClickOutside(paletteRef, () => setShowPalette(false));
  return (
    <div
      ref={paletteRef}
      className="color-palette"
      onClick={(e) => e.stopPropagation()}
    >
      <BsFillPaletteFill
        className="color-palette-icon"
        onClick={toggleShowPalette}
      />
      {showPalette && (
        <div className="color-palette-colors">
          {colors.map((clr) => (
            <span
              key={clr}
              className={
                clr === color
                  ? `${clr} color-highlight`
                  : `${clr} color-outline`
              }
              onClick={() => changeColor(clr)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};
