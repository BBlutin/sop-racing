import Image from "next/image";
import { Cog6ToothIcon, EyeIcon } from "@heroicons/react/24/solid";

const CarComponent = ({ component }: { component: Component }) => {
  if (component) console.log(component.rarity);

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
            <button className="p-2 bg-yellow-100 rounded-xl">
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
    </>
  );
};

export default CarComponent;
