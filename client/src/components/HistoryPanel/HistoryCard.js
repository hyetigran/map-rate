import React from "react";

const HistoryCard = (props) => {
  const { favorite } = props;
  console.log("card", favorite);
  return <div>{favorite.searchResult.name}</div>;
};

export default HistoryCard;
