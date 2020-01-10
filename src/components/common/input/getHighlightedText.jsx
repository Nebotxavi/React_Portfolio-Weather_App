import React from "react";

const getHighlightedText = (item, query) => {
  const parts = item.split(new RegExp(`(${query})`, "gi"));
  return (
    <React.Fragment>
      {parts.map((part, ind) => (
        <span
          key={ind}
          style={
            part.toLowerCase() === query.toLowerCase()
              ? { fontWeight: "bold" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </React.Fragment>
  );
};

export default getHighlightedText;
