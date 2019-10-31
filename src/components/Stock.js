import React, { useState } from "react";
import items from "../data/data";
// 38 lines of code minus this comment
const Stock = () => {
  const [showStock, setShowStock] = useState(true);
  const [check, setCheck] = useState(!"checked");

  return (
    <div className="container">
      <h3>Component with Hooks</h3>
      <input
        type="checkbox"
        checked={check ? "checked" : !"checked"}
        onChange={() => setCheck(!check)}
        onClick={() => setShowStock(!showStock)}
      />
      <hr />
      {items.label}
      <hr />
      {items.row.map((value, index) => (
        <div key={index}>
          <div>{value.level}</div>
          {value.locations.map((val, idx) => (
            <div key={idx}>
              <p>{val.name}</p>
              {val.stock.map((v, i) => (
                <div key={i}>
                  {showStock && (
                    <p>
                      <span>Product: </span>
                      {v.product}
                      <span>&nbsp;Qty: </span>
                      {v.qty}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Stock;
