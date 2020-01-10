import React, { useEffect, useRef } from "react";

function useManageClickOutside(node, { onClick }) {
  useEffect(() => {
    document.addEventListener("click", e => handleClickOutside(e), false);
    return () => {
      document.removeEventListener("click", e => handleClickOutside(e), false);
    };
  });

  const handleClickOutside = e => {
    if (!node.current.contains(e.target)) {
      onClick();
    }
  };
}

export default function ManageClickOutside(props) {
  const node = useRef();
  useManageClickOutside(node, props);

  return <div ref={node}>{props.children}</div>;
}
