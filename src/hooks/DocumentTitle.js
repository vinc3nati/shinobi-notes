import { useEffect } from "react";

const capitalize = (str) => {
  let newStr = [...str];
  return newStr[0].toUpperCase() + newStr.slice(1).join("");
};

export const useDocumentTitle = (title) => {
  useEffect(() => {
    if (typeof title === "string")
      document.title = `Shinobi Notes | ${capitalize(title)}`;
  }, [title]);
};
