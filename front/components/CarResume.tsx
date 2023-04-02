"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import CarComponent from "./CarComponent";
import CarStatistic from "./CarStatistic";

const CarResume = ({ car, inventory }: any) => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    power: 0,
    acceleration: 0,
    grip: 0,
    handling: 0,
    weight: 0,
    wear: 0,
    energy: 0,
  });
  const [body, setBody] = useState<Component>();
  const [wheel, setWheel] = useState<Component>();
  const [engine, setEngine] = useState<Component>();
  const [spoiler, setSpoiler] = useState<Component>();
  const [brakes, setBrakes] = useState<Component>();

  useEffect(() => {
    let power: number = 0,
      acceleration: number = 0,
      grip: number = 0,
      handling: number = 0,
      weight: number = 0,
      wear: number = 0,
      energy: number = 0;
    for (let index = 0; index < car.items.length; index++) {
      let current = car.items[index].item;
      if (current.type === "Wheels") {
        setWheel(current);
      } else if (current.type === "Bodywork") {
        setBody(current);
      } else if (current.type === "Brakes") {
        setBrakes(current);
      } else if (current.type === "Motor") {
        setEngine(current);
      } else if (current.type === "Spoiler") {
        setSpoiler(current);
      }
      current.statistiques.forEach((element: Stat) => {
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
    }
    setStats({ power, acceleration, grip, handling, weight, wear, energy });
    setLoading(false);
  }, [car]);

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex">
          <div className="relative w-[30vw] h-[30vw] mr-20">
            <Image
              src="/assets/car-illu.png"
              fill
              alt="Notre voiture"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col w-full my-20 bg-white rounded-lg shadow-md">
            <div className="w-full pb-4 pl-6 pr-2">
              <CarStatistic stats={stats} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-10 text-xl font-medium text-slate-600">
            Composants équipés :
          </h2>
        </div>
      </div>

      {loading ? (
        <div className="w-1/2 mx-auto h-96">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-7">
          <CarComponent component={body!} inventory={inventory} />
          <CarComponent component={engine!} inventory={inventory} />
          <CarComponent component={spoiler!} inventory={inventory} />
          <CarComponent component={brakes!} inventory={inventory} />
          <CarComponent component={wheel!} inventory={inventory} />
        </div>
      )}
    </div>
  );
};

export default CarResume;
