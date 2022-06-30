import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

const Transaction = () => {
  const { transaction } = useContext(ProductContext);

  const [tr, setTr] = useState([]);

  useEffect(() => {
    setTr([...tr, ...transaction]);
    console.log(tr);
  }, []);
  return (
    <div>
      transaction
      {tr &&
        tr.map((data) => {
          return (
            <div key={data.ID}>
              <p>{data.ID}</p>
              <p>{data.Address}</p>
              <p>{data.Status}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Transaction;
