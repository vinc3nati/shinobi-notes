import { useEffect } from "react";
import { capitalize } from "../utils/capitalize";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    if (typeof title === "string")
      document.title = `Shinobi Notes | ${capitalize(title)}`;
  }, [title]);
};
