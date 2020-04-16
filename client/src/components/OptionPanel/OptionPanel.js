import React, { useState, useEffect } from "react";
import { Switch, Button } from "antd";
import axios from "axios";

import OptionCash from "./OptionCash";
import OptionCard from "./OptionCard";
import "./Sider.css";

import { geoData } from "../../utility/location";

const OptionPanel = (props) => {
  const { form, setForm } = props;
  const [isCash, setIsCash] = useState(true);
  const [nonCashData, setNonCashData] = useState([]);

  useEffect(() => {
    if (!nonCashData.length) {
      fetchNonCashData();
    }
  }, [nonCashData]);

  function fetchNonCashData() {
    //.get("http://localhost:8000/rate") // need to change to "/rate" before `npm run build`
    axios
      .get("/rate")
      .then((response) => {
        setNonCashData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onChange(checked) {
    setIsCash(checked);
  }
  function onCurrencyChange(checked) {
    setForm({ ...form, currency: checked.target.value });
  }
  function onBuySellChange(checked) {
    //console.log("clicked", checked);
    setForm({ ...form, isBuying: checked.target.value });
  }

  function searchHandle() {
    const allRateList = nonCashData.map((bank) => {
      let specificRate = bank[form.currency][form.isBuying];
      return { name: bank.bankName, rate: specificRate };
    });
    let bestRate = 0;
    function bestRateFinder() {
      if (form.isBuying === "buy") {
        bestRate = allRateList.reduce(function (prev, current) {
          return prev.rate > current.rate ? prev : current;
        }, 0);
        console.log(bestRate);
        return bestRate;
      } else {
        bestRate = allRateList.reduce(function (prev, current) {
          return prev.rate < current.rate ? prev : current;
        });
        console.log("best rate", bestRate);
        return bestRate;
      }
    }
    let location;
    function getLocation() {
      let name = bestRate.name;
      console.log("name", name);
      location = geoData.filter((el) => el.name === name);
      console.log("geo", location);
      return location;
    }
    bestRateFinder();
    getLocation();
    setForm({ ...form, searchResult: bestRate, location: location });
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
          Rate to <em>{form.isBuying}</em> <strong>AMD</strong>
          {form.isBuying === "buy" ? " with " : " for "}
          <strong>{form.currency.toUpperCase()}</strong> using
          <em>{isCash ? " cash" : " a card"}</em>.
        </p>
        <p></p>
        {}
      </div>
      <Button type="primary" onClick={() => searchHandle()}>
        Search
      </Button>
    </div>
  );
};

export default OptionPanel;
