import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryPanel = (props) => {
  const { history, setForm } = props;
  //use set form to paint marker back on map
  console.log("history", history);
  return (
    <div>
      {history.length &&
        history.reverse().map((el, idx) => {
          return <HistoryCard key={idx} history={el} />;
        })}
    </div>
  );
};

export default HistoryPanel;
