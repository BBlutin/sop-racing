import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import BestTime from "@/components/BestTime";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Race = ({
  time,
  image,
  name,
  id,
}: {
  time: number;
  image: string;
  name: string;
  id: number;
}) => {
  let [isOpen, setIsOpen] = useState(false);
  let [medal, setMedal] = useState("none");
  let [raceTime, setRaceTime] = useState("0");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function secondsToHms(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " sec") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  async function handleStart(id: number) {
    const res = await fetch(
      "http://185.98.136.60:9090/races/" + id + "/run/10",
      {
        method: "get",
        cache: "no-store",
        headers: new Headers({
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
          "Content-Type": "application/json",
        }),
      }
    );
    const result: any = await res.json();
    if (res.status != 200) {
      alert(result.message);
    } else {
      setRaceTime(secondsToHms(result.time));
      setMedal(result.medal);
      setIsOpen(true);
    }

    console.log(result);
  }

  return (
    <>
      <div className="w-full p-3 bg-white shadow-md rounded-xl">
        <div className="relative w-full pt-5 px-5 bg-gray-100 rounded-br-[60%] rounded-bl-[25%] rounded-t-xl">
          <div className="absolute flex justify-between left-10 right-10 top-4">
            <Image
              src={"/assets/bronze.png"}
              width={30}
              height={30}
              alt="Bronze"
            />
            <Image
              src={"/assets/silver.png"}
              width={30}
              height={30}
              alt="Argent"
            />
            <Image src={"/assets/gold.png"} width={30} height={30} alt="Or" />
          </div>
          <Image
            src={`/assets/races/${image}.svg`}
            width={500}
            height={500}
            alt="Circuit"
          />
          <div className="absolute px-4 py-2 -skew-y-12 bg-slate-700 rotate-12 rounded-xl bottom-2 right-3">
            <span className="text-2xl font-extrabold text-white">{name}</span>
          </div>
        </div>
        <div className="mt-3">
          <BestTime time={time} />
        </div>
        <div className="flex w-full mt-4">
          <button
            onClick={() => handleStart(id)}
            className="flex items-center justify-center w-full px-4 py-3 font-bold text-purple-800 transition-all bg-purple-100 hover:bg-purple-300 rounded-xl"
          >
            <PlayIcon className="w-5 h-5 mr-2 fill-purple-800" />
            Lancer la course
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Course effectué avec succès !
                  </Dialog.Title>
                  <div className="flex flex-col items-center justify-center">
                    <span className="mt-10 mb-6">
                      {medal === "Gold" && (
                        <Image
                          src={"/assets/gold.png"}
                          width={50}
                          height={50}
                          alt="Or"
                        />
                      )}
                      {medal === "Silver" && (
                        <Image
                          src={"/assets/silver.png"}
                          width={50}
                          height={50}
                          alt="Or"
                        />
                      )}
                      {medal === "Brass" && (
                        <Image
                          src={"/assets/bronze.png"}
                          width={50}
                          height={50}
                          alt="Or"
                        />
                      )}
                    </span>
                    <p className="mb-8 text-xl font-medium text-gray-500">
                      {raceTime}
                    </p>
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 font-medium text-green-900 transition-all bg-green-100 border border-transparent rounded-md trans hover:bg-green-200 "
                      onClick={closeModal}
                    >
                      Super !
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

export default Race;
