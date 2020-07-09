import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryPanel = (props) => {
  const { favorites, setForm } = props;
  //use set form to paint marker back on map
  console.log("favorites", favorites);
  return (
    <div>
      {favorites.length &&
        favorites.reverse().map((el, idx) => {
          return <HistoryCard key={idx} favorite={el} />;
        })}
    </div>
  );
};

export default HistoryPanel;
