import { useState, useEffect, useContext } from "react";
import api from "../../api/api";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import { Card, ItemCard } from "./order.styles";
const Order = () => {
  const { requiredOrder, setRequiredOrder } = useContext(OrderContext);
  const { id } = useParams();
  const [order, setOrder] = useState(null);
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
