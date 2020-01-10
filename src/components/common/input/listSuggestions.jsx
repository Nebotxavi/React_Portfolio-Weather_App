import React, { useState, useEffect } from "react";
import { getCities } from "../../../services/cityService";
import ListItem from "./listItem";
import useKeyPress from "./useKeyPress";

const ListSuggestions = ({ query, submitClickedItem, handleSubmit }) => {
  const matches = query ? getCities(query) : [];
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    setCursor(0);
  }, [matches.length]);

  useEffect(() => {
    if (matches.length && downPress) {
      setCursor(prevState =>
        prevState < matches.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress, matches.length]);

  useEffect(() => {
    if (matches.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, matches.length]);

  useEffect(() => {
    if (matches.length && matches[cursor] && enterPress) {
      handleSubmit(matches[cursor]["id"]);
    }
  }, [cursor, enterPress, matches, handleSubmit]);

  useEffect(() => {
    if (matches.length && hovered) {
      setCursor(matches.indexOf(hovered));
    }
  }, [hovered, matches]);

  return (
    <React.Fragment>
      {matches.map((item, ind) => {
        return (
          <ListItem
            item={item}
            key={ind}
            active={ind === cursor}
            query={query}
            submitClickedItem={submitClickedItem}
            setHovered={setHovered}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ListSuggestions;
