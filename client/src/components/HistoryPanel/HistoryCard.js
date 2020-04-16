import React from "react";

const HistoryCard = (props) => {
  const { history } = props;
  console.log("card", history);
  return <div>{history.searchResult.name}</div>;
};

export default HistoryCard;
