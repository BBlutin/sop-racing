"use-client";

import Image from "next/image";
import {
  Cog6ToothIcon,
  EyeIcon,
  BanknotesIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ItemResume from "./ItemResume";

const CarComponent = ({
  component,
  inventory,
}: {
  component: Component;
  inventory: Item[];
}) => {
  let [isEditOpen, setIsEditOpen] = useState(false);
  let [isDetailOpen, setIsDetailOpen] = useState(false);
  let [activeType, setActiveType] = useState("");
  let [activeItem, setActiveItem] = useState<Component>();
  const [stats, setStats] = useState<Stats>({
    power: 0,
    acceleration: 0,
    grip: 0,
    handling: 0,
    weight: 0,
    wear: 0,
    energy: 0,
  });

  function closeEditModal() {
    setIsEditOpen(false);
  }

  function openEditModal(type: string) {
    setIsEditOpen(true);
    setActiveType(type);
  }

  function closeDetailModal() {
    setIsEditOpen(false);
  }

  function openDetailModal() {
    setIsEditOpen(true);
  }

  useEffect(() => {
    inventory.forEach((element) => {
      if (element.item.type === activeType && element.isEquipped) {
        setActiveItem(element.item);
      }
    });
  }, [activeType]);

  useEffect(() => {
    let power: number = 0,
      acceleration: number = 0,
      grip: number = 0,
      handling: number = 0,
      weight: number = 0,
      wear: number = 0,
      energy: number = 0;
    activeItem?.statistiques.forEach((element) => {
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
  }, [activeItem]);

  return (
    <>
      {component ? (
        <div
          className={`componentCard ${
            component.rarity === "Common" ? "shadow-emerald-200" : ""
          } ${component.rarity === "Rare" ? "shadow-sky-200" : ""} ${
            component.rarity === "Mythical" ? "shadow-violet-300" : ""
          }`}
        >
          <Image
            src={`/assets/items/motors/${component?.image}.png`}
            width={512}
            height={512}
            alt="Composant"
          />
          <div className="absolute flex top-2 right-3">
            <button className="p-2 mr-2 bg-purple-100 rounded-xl">
              <EyeIcon className="w-5 h-5 fill-purple-600" />
            </button>
            <button
              className="p-2 bg-yellow-100 rounded-xl"
              onClick={() => openEditModal(component.type)}
            >
              <Cog6ToothIcon className="w-5 h-5 fill-yellow-600" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative p-20 bg-white shadow-xl w-60 h-60 rounded-xl">
          <Image
            src={`/assets/none.png`}
            width={300}
            height={300}
            alt="Composant"
          />
        </div>
      )}
      <Transition appear show={isEditOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeEditModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full px-10 py-20 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-5xl max-h-full p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-neutral-100 min-h-1/2 rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Modifier le composant
                  </Dialog.Title>
                  <div className="relative pt-3 ">
                    <div
                      className={`activeItem ${
                        activeItem?.rarity === "Common"
                          ? "shadow-emerald-200"
                          : ""
                      } ${
                        activeItem?.rarity === "Rare" ? "shadow-sky-200" : ""
                      } ${
                        activeItem?.rarity === "Mythical"
                          ? "shadow-violet-300"
                          : ""
                      }`}
                    >
                      <div className="relative w-32 h-32 mr-6">
                        <Image
                          src={`/assets/items/motors/${activeItem?.image}.png`}
                          fill
                          alt="Composant"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col w-full p-3">
                        <div className="flex justify-between">
                          <h4 className="text-lg font-semibold">
                            {activeItem?.name}
                          </h4>
                          <div className="flex">
                            <span className="flex items-center px-2 py-1 mr-3 bg-green-200 rounded-xl">
                              <BanknotesIcon className="w-4 h-4 mr-2" />
                              {activeItem?.sellingPrice}
                            </span>
                            <span className="flex items-center px-2 py-1 bg-orange-200 rounded-xl">
                              <ShoppingCartIcon className="w-4 h-4 mr-2" />
                              {activeItem &&
                                (activeItem.sellingPrice * 0.7).toFixed(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <div className="flex flex-col items-center">
                            <h5>Puissance</h5>
                            <span className="text-xl font-bold">
                              {stats.power}
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5>Accelération</h5>
                            <span className="text-xl font-bold">
                              {stats.acceleration}
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5>Grip</h5>
                            <span className="text-xl font-bold">
                              {stats.grip}
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5>Maniabilité</h5>
                            <span className="text-xl font-bold">
                              {stats.handling}
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5>Poids</h5>
                            <span className="text-xl font-bold">
                              {stats.weight}
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5>Usure</h5>
                            <span className="text-xl font-bold">
                              {stats.wear}
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5>Consommation</h5>
                            <span className="text-xl font-bold">
                              {stats.energy}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mt-8">
                      {inventory.map((item) => {
                        console.log(item, activeType);
                        if (item.item.type === activeType && item.isEquipped) {
                          return <ItemResume item={item.item} />;
                        }
                      })}
                    </div>
                  </div>

                  <div className="absolute top-4 right-6">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-purple-900 transition-all bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 focus:outline-none"
                      onClick={closeEditModal}
                    >
                      Retour
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarComponent;
