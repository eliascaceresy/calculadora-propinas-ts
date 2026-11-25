import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";

function App() {
  const { order, addItemToOrder } = useOrder();

  return (
    <>
      <header className="bg-indigo-500 py-10 text-center">
        <h1 className="text-4xl text-white font-black">Calculadora de Propinas y Consumos</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-center text-4xl font-bold text-indigo-600">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem item={item} key={item.id} addItemToOrder={addItemToOrder} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-salte-300 p-5 rounded-lg space-y-10">
          <h2 className="text-center text-4xl font-bold text-indigo-600">Consumo</h2>
          <OrderContents order={order} />
        </div>
      </main>
    </>
  );
}

export default App;
