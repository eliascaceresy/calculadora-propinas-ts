import { useMemo } from "react";
import type { OrderItemType } from "../types";

type OrderTotalProps = {
  order: OrderItemType[];
  tip: number;
  placeOrder: () => void;
};

const OrderTotal = ({ order, tip, placeOrder }: OrderTotalProps) => {
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
      <button
        disabled={total === 0}
        onClick={() => placeOrder()}
        className="disabled:opacity-10 hover:cursor-pointer w-full p-3 uppercase bg-black text-white font-bold mt-10 rounder-lg"
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotal;
