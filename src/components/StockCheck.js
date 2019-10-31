import React from "react";
import "../App.css";

const isArray = arr => !!(arr && Array.isArray(arr));

const StockCheck = ({ collection }) =>
  Array.isArray(collection) ? (
    <div>
      {collection.map((item, index) =>
        item && isArray(item.locations) ? (
          <div key={index}>
            {item.level}
            {item.locations.map((item, index) => (
              <div key={index}>
                {item.name}
                {isArray(item.stock) && (
                  <div>
                    {item.stock.map((stock, index) => (
                      <div key={index}>
                        {stock.product}
                        <StockCheck collection={item.locations} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div key={index}> {item && (item.level || item.name)} </div>
        )
      )}
    </div>
  ) : null;

export default StockCheck;
