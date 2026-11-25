import type { MenuItemType } from "../types";

type MenuItemProps = {
  item: MenuItemType;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <button className="border-2 border-indigo-500 w-full p-3 flex justify-between mt-1 hover:cursor-pointer hover:bg-indigo-400 hover:text-white rounded-lg">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
