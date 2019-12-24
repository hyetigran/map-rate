import React, { useState } from "react";
import { Switch, Button, Modal } from "antd";

import OptionCash from "./OptionCash";
import OptionCard from "./OptionCard";
import "./Sider.css";

import { dummyData } from "../../utility/dummyData";

const initialForm = {
  isBuying: "buy",
  currency: "usd",
  searchResult: [
    {
      name: "",
      rate: ""
    }
  ]
};
const OptionPanel = () => {
  const [isCash, setIsCash] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [modal, setModal] = useState({ visible: false });
  console.log(form);
  console.log(modal);
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

  function searchHandle() {
    const allRateList = dummyData.map(bank => {
      let specificRate = bank[form.currency][form.isBuying];
      return { name: bank.bankName, rate: specificRate };
    });
    let bestRate = 0;
    function bestRateFinder() {
      if (form.isBuying === "buy") {
        bestRate = allRateList.reduce(function(prev, current) {
          return prev.rate > current.rate ? prev : current;
        });
        console.log(bestRate);
        return bestRate;
      } else {
        bestRate = allRateList.reduce(function(prev, current) {
          return prev.rate < current.rate ? prev : current;
        });
        console.log(bestRate);
        return bestRate;
      }
    }
    bestRateFinder();
    setForm({ ...form, searchResult: { rate: bestRate } });
    handleOk();
  }

  //Modal handlers
  const showModal = () => {
    setModal({
      visible: true
    });
  };

  const handleOk = e => {
    setModal({
      visible: false
    });
  };

  const handleCancel = e => {
    //console.log(e);
    setModal({
      visible: false
    });
  };
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
          Rate to <em>{form.isBuying}</em> <strong>AMD</strong> with{" "}
          <strong>{form.currency.toUpperCase()}</strong> using
          <em>{isCash ? " cash" : " a card"}</em>.
        </p>
        <p></p>
        {}
      </div>
      <Button type="primary" onClick={showModal}>
        Search
      </Button>
      <Modal
        title="Basic Modal"
        visible={modal.visible}
        onOk={searchHandle}
        onCancel={handleCancel}
      >
        {/* {form.searchResult} */}
      </Modal>
    </div>
  );
};

export default OptionPanel;
