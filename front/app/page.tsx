import Image from "next/image";
import { Inter } from "next/font/google";
import { getTeamInfo } from "@/lib/team";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  let teamData = await getTeamInfo();

  console.log(teamData);
  return (
    <div className="flex flex-col w-full px-20 pt-8 pb-40 mx-auto">
      <div className="pl-20 pr-40">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-slate-600">
            Bienvenue chez TEC Racing
          </h1>
        </div>
        <div className="flex flex-col mt-14">
          <div className="flex">
            <div className="flex items-center justify-between w-2/3 px-6 py-4 mr-8 shadow-lg rounded-xl bg-gradient-to-br from-pink-500 to-purple-700">
              <Image
                src={"/assets/money.png"}
                width={250}
                height={250}
                alt="Argent"
              />
              <h3 className="mr-10 text-6xl font-bold text-white">
                {teamData.coin} $
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 shadow-lg bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl">
              <Image
                src={"/assets/score.png"}
                width={150}
                height={150}
                alt="Argent"
              />
              <h3 className="mt-6 text-5xl font-bold text-white">
                {teamData.score} pts
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl">
              <Image
                src={"/assets/gold.png"}
                width={100}
                height={100}
                alt="Or"
              />
              <h4 className="mt-6 text-4xl font-bold text-slate-600">15</h4>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl">
              <Image
                src={"/assets/silver.png"}
                width={100}
                height={100}
                alt="Argent"
              />
              <h4 className="mt-6 text-4xl font-bold text-slate-600">0</h4>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl">
              <Image
                src={"/assets/bronze.png"}
                width={100}
                height={100}
                alt="bronze"
              />
              <h4 className="mt-6 text-4xl font-bold text-slate-600">0</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
