import React, { useState, useEffect } from "react";

import { Switch } from "antd";

import "./Sider.css";

const OptionPanel = () => {
  const [isCash, setIsCash] = useState(true);
  function onChange(checked) {
    setIsCash(checked);
  }

  return (
    <div className="sider">
      <h2>Trasaction Type:</h2>
      <div className="cashSwitch">
        {isCash ? "Cash:" : "Card:"}
        <Switch defaultChecked onChange={onChange} />
      </div>
    </div>
  );
};

export default OptionPanel;
