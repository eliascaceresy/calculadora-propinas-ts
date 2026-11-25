import { useState } from "react";
import type { OrderItemType } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const [tip, setTip] = useState<number>(0);

  const addItemToOrder = (item: OrderItemType) => {
    const itemExist = order.findIndex(element => element.id === item.id);
    const newOrder = [...order];

    if (itemExist >= 0) {
      newOrder[itemExist].quantity += 1;
      setOrder([...newOrder]);
    } else {
      setOrder([...newOrder, item]);
    }
  };

  const removeFromOrder = (id: OrderItemType["id"]) => {
    const updatedOrder = order.filter(item => item.id !== id);
    setOrder(updatedOrder);
  };

  return { order, tip, addItemToOrder, removeFromOrder, setTip };
};

export default useOrder;
