import React from "react";
import Order from "./components/Order";

const Restaurant = () => {
  return (
    <div style={{ marginTop: '120px' }}>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Kebab" />
        <Order orderType="Baklava" />
      </ul>
    </div>
  );
};

export default Restaurant;
