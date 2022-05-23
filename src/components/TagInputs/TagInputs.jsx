import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useData } from "../../contexts";
import { useOnClickOutside } from "../../hooks/ClickOutside";
import { ACTIONS } from "../../utils/constants";

export const TagInputs = ({ handleChange, tag }) => {
  const [tagInput, setTagInput] = useState("");
  const [showTagsDropDown, setShowTagsDropDown] = useState(false);
  const {
    state: { tags },
    dispatch,
  } = useData();
  const tagRef = useRef();
  const toggleTagsDropDown = () => setShowTagsDropDown((prev) => !prev);

  useOnClickOutside(tagRef, () => setShowTagsDropDown(false));
  return (
    <div className="input-tag-container" ref={tagRef}>
      <div className="input-tag" onClick={toggleTagsDropDown}>
        Tags
        <IoIosArrowDown />
      </div>
      {showTagsDropDown && (
        <div className="tags-dropdown">
          <div className="tags-content">
            {tags &&
              tags.map((tg) => (
                <div className="checkbox-grp" key={tg}>
                  <input
                    onChange={(e) => handleChange(e, tg)}
                    checked={tag.some((item) => item === tg)}
                    type="checkbox"
                    id={`${tg}-checkbox`}
                  />
                  <label htmlFor={`${tg}-checkbox`}>{tg}</label>
                </div>
              ))}
          </div>
          <div className="tags-action">
            <input
              className="tag-action-input"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button
              className="tag-action-btn"
              type="button"
              onClick={() => {
                if (!tagInput) return;
                dispatch({
                  type: ACTIONS.SetTags,
                  payload: { tags: tagInput },
                });
                setTagInput("");
              }}
            >
              add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
