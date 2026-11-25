import type { OrderItemType } from "../types";

type OrderContentsProps = {
  order: OrderItemType[];
  removeFromOrder: (id: OrderItemType["id"]) => void;
};

const OrderContents = ({ order, removeFromOrder }: OrderContentsProps) => {
  return (
    <div className="space-y-3 mt-5">
      {order.length > 0 ? (
        order.map(orderItem => {
          return (
            <div
              key={orderItem.id}
              className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
            >
              <div>
                <p className="text-indigo-600 text-lg">
                  {orderItem.name} - <span className="font-black">${orderItem.price}</span>
                </p>
                <p className="font-black text-indigo-800">
                  Cantidad: {orderItem.quantity} - Total: ${orderItem.quantity * orderItem.price}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 text-white rounded-full font-black hover:cursor-pointer"
                onClick={() => removeFromOrder(orderItem.id)}
              >
                X
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center text-indigo-600 font-black">La orden está vacía</p>
      )}
    </div>
  );
};

export default OrderContents;
