import CarResume from "@/components/CarResume";
import { getCar, getInventory } from "@/lib/items";

const CarPage = async () => {
  let carData = await getCar();
  let inventory = await getInventory();

  return (
    <div className="flex flex-col w-full px-20 pt-8 pb-40 mx-auto">
      <div className="pl-20 pr-40">
        <h1 className="text-3xl font-bold text-slate-600"> Voiture actuelle</h1>
        <CarResume car={carData} inventory={inventory.items} />
      </div>
    </div>
  );
};

export default CarPage;
