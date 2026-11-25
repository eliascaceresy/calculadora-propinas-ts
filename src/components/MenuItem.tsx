import type { MenuItemType, OrderItemType } from "../types";

type MenuItemProps = {
  item: MenuItemType;
  addItemToOrder: (item: OrderItemType) => void;
};

const MenuItem = ({ item, addItemToOrder }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-indigo-500 w-full p-3 flex justify-between mt-1 hover:cursor-pointer hover:bg-indigo-400 hover:text-white rounded-lg"
      onClick={() => addItemToOrder({ ...item, quantity: 1 })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
