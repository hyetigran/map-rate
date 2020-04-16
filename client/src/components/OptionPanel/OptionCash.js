import React from "react";
import { Radio } from "antd";

const OptionCash = ({ isBuying, onBuySellChange, onCurrencyChange }) => {
  return (
    <div className="optionCardCash">
      Cash Options
      <div>
        <Radio.Group
          onChange={onBuySellChange}
          buttonStyle="solid"
          defaultValue="buy"
        >
          <Radio.Button value="buy">Buy</Radio.Button>
          <Radio.Button value="sell">Sell</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Radio.Group
          onChange={onCurrencyChange}
          name="radiogroup"
          defaultValue={"usd"}
        >
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
          <Radio value={"rub"}>RUB</Radio>
          <Radio value={"gbp"}>GBP</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default OptionCash;
