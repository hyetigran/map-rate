import React, { useState } from "react";
import { Switch, Button } from "antd";

import OptionCash from "./OptionCash";
import OptionCard from "./OptionCard";
import "./Sider.css";

const initialForm = {
  isBuying: "buy",
  currency: "USD"
};
const OptionPanel = () => {
  const [isCash, setIsCash] = useState(true);
  const [form, setForm] = useState(initialForm);
  console.log(form);
  function onChange(checked) {
    setIsCash(checked);
  }
  function onCurrencyChange(checked) {
    setForm({ ...form, currency: checked.target.value });
  }
  function onBuySellChange(checked) {
    console.log("clicked", checked);
    setForm({ ...form, isBuying: checked.target.value });
  }

  return (
    <div className="sider">
      <h2>Trasaction Type:</h2>
      <div className="cashSwitch">
        {isCash ? "Cash:" : "Card:"}
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div>
        {isCash ? (
          <OptionCash
            isBuying={form.isBuying}
            onBuySellChange={onBuySellChange}
            onCurrencyChange={onCurrencyChange}
          />
        ) : (
          <OptionCard />
        )}
      </div>
      <div className="searchSummary">
        <p>
          Rate to <em>{form.isBuying}</em> <strong>AMD</strong> for{" "}
          <strong>{form.currency}</strong> with{" "}
          <em>{isCash ? "cash" : "card"}</em>.
        </p>
        <p></p>
        {}
      </div>
      <Button type="primary">Search</Button>
    </div>
  );
};

export default OptionPanel;
