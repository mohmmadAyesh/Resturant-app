import {useEffect, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { Card, ItemCard } from "./order.styles";
const Order = () => {
  const { requiredOrder} = useContext(OrderContext);
  useEffect(() => {
    console.log(requiredOrder);
  }, [requiredOrder]);
  return (
    <>
      <Card>
        <h1>My Order</h1>
        <p>items</p>
        {requiredOrder.items.map((el) => (
          <ItemCard>
            <p>Name: {el.item.name}</p>
            <p>Quantity: {el.quantity}</p>
            <p>Price: {el.item.price} $</p>
          </ItemCard>
        ))}
        <p>Total Price : {requiredOrder.totalPrice} $</p>
      </Card>
    </>
  );
};
export default Order;
