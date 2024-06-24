import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { Item } from "../Menu/menu.styles.js";
import { OrderContext } from "../../context/OrderContext";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const { setRequiredOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate,user]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get(`/order`);
        console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.log("err in bringing orders: ", err);
      }
    };

    fetchOrders();
  }, []);
  const GoToOrder = async (id) => {
    try {
      const res = await api.get(`/order/ordered/${id}`);
      setRequiredOrder(res.data);
      navigate("/myOrder");
    } catch (err) {}
  };
  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
        </>
      )}
      <h3>Order History</h3>
      <ul>
        {orders.map((order) => (
          <Item key={order._id} onClick={(e) => GoToOrder(order._id)}>
            <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
            <p>status: {order.status}</p>
            <p>Items:</p>
            <ul style={{ display: "flex" }}>
              {order.items.map((item) => (
                <>
                  <li key={item._id}>{item.item.name}</li>
                  <p>,</p>
                </>
              ))}
            </ul>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
