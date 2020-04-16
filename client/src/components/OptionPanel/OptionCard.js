import React from "react";
import { Radio } from "antd";

const OptionCard = () => {
  return (
    <div className="optionCardCash">
      Card Options
      <div>
        <Radio.Group defaultValue="buy" buttonStyle="solid">
          <Radio.Button value="buy">Buy</Radio.Button>
          <Radio.Button value="sell" disabled>
            Sell
          </Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Radio.Group name="radiogroup" defaultValue={"usd"}>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
          <Radio value={"rub"}>RUB</Radio>
          <Radio value={"gbp"}>GBP</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default OptionCard;
