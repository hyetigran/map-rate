import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryPanel = (props) => {
  const { history, setForm } = props;
  //use set form to paint marker back on map

  return (
    <div>
      {history.length &&
        history.reverse().map((el) => {
          return <HistoryCard history={el} />;
        })}
    </div>
  );
};

export default HistoryPanel;
