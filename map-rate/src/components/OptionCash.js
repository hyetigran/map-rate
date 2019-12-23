import React from "react";
import { Radio } from "antd";

const OptionCash = ({ isBuying, onBuySellChange, onCurrencyChange }) => {
  return (
    <div className="optionCash">
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
          defaultValue={"USD"}
        >
          <Radio value={"USD"}>USD</Radio>
          <Radio value={"EUR"}>EUR</Radio>
          <Radio value={"RUB"}>RUB</Radio>
          <Radio value={"GBP"}>GBP</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default OptionCash;
