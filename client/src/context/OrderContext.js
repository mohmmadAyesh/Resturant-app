import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [requiredOrder, setRequiredOrder] = useState(null);
  return (
    <OrderContext.Provider value={{ requiredOrder, setRequiredOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
