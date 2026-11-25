import { useState } from "react";
import type { OrderItemType } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItemType[]>([]);

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

  return { order, addItemToOrder };
};

export default useOrder;
