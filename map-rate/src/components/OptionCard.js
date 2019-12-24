import React from "react";
import { Radio } from "antd";

const OptionCard = () => {
  return (
    <div className="optionCard">
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
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>USD</Radio>
          <Radio value={2}>EUR</Radio>
          <Radio value={3}>RUB</Radio>
          <Radio value={4}>GBP</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default OptionCard;
