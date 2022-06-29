import React from "react";
import Layout from "../components/Layout";

const ShippingCart = () => {
  return (
    <Layout>
      <div>
        <table class="w-full text-left">
          <thead>
            <tr>
              <th>Product</th>
              <th>Harga Satuan</th>
              <th>Kuantitas</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sepatu</td>
              <td>Rp. 10000</td>
              <td>1</td>
              <td>Rp. 10000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="font-bold flex flex-col text-right py-4">
        <p>Total</p>
        <p>Rp. 10000</p>
      </div>
    </Layout>
  );
};

export default ShippingCart;
