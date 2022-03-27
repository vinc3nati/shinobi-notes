import React from "react";
import { DisplayNotes } from "../../components/DisplyaNotes/DisplayNotes";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Notes = ({ title }) => {
  useDocumentTitle(title);
  return (
    <>
      <Navbar />
      <section id="notes">
        <div className="notes-container">
          <Sidebar />
          <DisplayNotes />
        </div>
      </section>
    </>
  );
};
