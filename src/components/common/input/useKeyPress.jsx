import { useState, useEffect } from "react";

const useKeyPress = function(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function upHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  return keyPressed;
};

export default useKeyPress;
