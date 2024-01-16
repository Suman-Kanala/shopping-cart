import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | shopmate`;
  });
  return null;
};

export default UseTitle;
