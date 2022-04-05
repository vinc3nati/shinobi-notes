import React from "react";
import { useFilteredData } from "../../hooks/FilterData";
import { NoteCard } from "../NoteCard/NoteCard";

export const DisplayNotes = () => {
  const { sortedData } = useFilteredData();
  const { pinnedData, otherData } = sortedData.reduce(
    (acc, curr) =>
      curr.isPinned
        ? { ...acc, pinnedData: acc.pinnedData.concat(curr) }
        : { ...acc, otherData: acc.otherData.concat(curr) },
    { pinnedData: [], otherData: [] }
  );
  return (
    <>
      {pinnedData && pinnedData.length !== 0 && (
        <>
          <h5 className="text-center highlight">Pinned</h5>
          <div className="note-card-container">
            {pinnedData.map((pinnedNote) => (
              <NoteCard
                key={pinnedNote._id}
                operations={{ note: pinnedNote }}
              />
            ))}
          </div>
        </>
      )}
      {otherData.length !== 0 && (
        <>
          {pinnedData.length !== 0 && (
            <h5 className="text-center highlight">Others</h5>
          )}
          <div className="note-card-container">
            {otherData.map((noteItem) => (
              <NoteCard key={noteItem._id} operations={{ note: noteItem }} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
