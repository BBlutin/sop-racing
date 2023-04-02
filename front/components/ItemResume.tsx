"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BanknotesIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const ItemResume = ({
  item,
  closeModal,
}: {
  item: Component;
  closeModal: () => void;
}) => {
  const [stats, setStats] = useState<Stats>({
    power: 0,
    acceleration: 0,
    grip: 0,
    handling: 0,
    weight: 0,
    wear: 0,
    energy: 0,
  });

  const router = useRouter();

  useEffect(() => {
    let power: number = 0,
      acceleration: number = 0,
      grip: number = 0,
      handling: number = 0,
      weight: number = 0,
      wear: number = 0,
      energy: number = 0;
    console.log(item);
    item?.statistiques.forEach((element) => {
      if (element.type === "Power") {
        power += element.value;
      } else if (element.type === "Acceleration") {
        acceleration += element.value;
      } else if (element.type === "Grip") {
        grip += element.value;
      } else if (element.type === "Handling ability") {
        handling += element.value;
      } else if (element.type === "Weight") {
        weight += element.value;
      } else if (element.type === "Wear") {
        wear += element.value;
      } else if (element.type === "Energy consumption") {
        energy += element.value;
      }
    });
    setStats({ power, acceleration, grip, handling, weight, wear, energy });
  }, [item]);

  async function onEquip(id: number) {
    const res = await fetch(
      "http://185.98.136.60:9090/teams/10/inventory/equip/" + id,
      {
        method: "put",
        headers: new Headers({
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
          "Content-Type": "application/json",
        }),
      }
    );
    const result: any = await res.json();
    router.refresh();
    closeModal();
  }

  return (
    <div className="flex flex-col w-full px-4 py-3 bg-white rounded-lg">
      <div className="flex">
        <div className="flex flex-col justify-center mr-4">
          <h4>{item.name}</h4>
          <div className="relative mt-2 h-28 w-28">
            <Image
              src={`/assets/items/motors/${item.image}.png`}
              fill
              alt="Composant"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-end">
            <span className="flex items-center px-2 py-1 mr-3 bg-green-200 rounded-xl">
              <BanknotesIcon className="w-4 h-4 mr-2" />
              {item.sellingPrice}
            </span>
            <span className="flex items-center px-2 py-1 bg-orange-200 rounded-xl">
              <ShoppingCartIcon className="w-4 h-4 mr-2" />
              {(item.sellingPrice * 0.7).toFixed(0)}
            </span>
          </div>
          <div className="grid grid-cols-4 mt-5">
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Puissance</h5>
              <span className="text-base font-bold">{stats.power}</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Accelération</h5>
              <span className="text-base font-bold">{stats.acceleration}</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Grip</h5>
              <span className="text-base font-bold">{stats.grip}</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Maniabilité</h5>
              <span className="text-base font-bold">{stats.handling}</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Poids</h5>
              <span className="text-base font-bold">{stats.weight}</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Usure</h5>
              <span className="text-base font-bold">{stats.wear}</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-xs">Consommation</h5>
              <span className="text-base font-bold">{stats.energy}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => onEquip(item.id)}
        className="self-end px-4 py-2 font-medium text-purple-700 transition-all bg-purple-100 outline-none ring-0 hover:text-white hover:bg-purple-500 rounded-xl"
      >
        Equiper
      </button>
    </div>
  );
};

export default ItemResume;
