import { useMemo } from "react";
import type { OrderItemType } from "../types";

type OrderTotalProps = {
  order: OrderItemType[];
  tip: number;
};

const OrderTotal = ({ order, tip }: OrderTotalProps) => {
  const subtotal = useMemo(() => {
    return order.reduce((total, item) => total + item.quantity * item.price, 0);
  }, [order]);

  const tipAmount = useMemo(() => {
    return tip * subtotal;
  }, [tip, order]);

  const total = useMemo(() => {
    return tipAmount + subtotal;
  }, [tip, order]);

  return (
    <>
      <div className="space-y-2">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: <span>${subtotal}</span>
        </p>
        <p>
          Propina: <span>${tipAmount}</span>
        </p>
        <p>
          Total a pagar: <span>${total}</span>
        </p>
      </div>
      <button></button>
    </>
  );
};

export default OrderTotal;
