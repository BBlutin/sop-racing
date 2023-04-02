import RaceList from "@/components/RaceList";
import { getBestTime } from "@/lib/races";

const RacePage = async () => {
  let bestTime = [];

  for (let index = 0; index < 15; index++) {
    bestTime[index] = await getBestTime(index + 1);
  }

  return (
    <div className="flex flex-col w-full px-20 pt-8 pb-40 mx-auto">
      <div className="pl-20 pr-40">
        <RaceList bestTime={bestTime} />
      </div>
    </div>
  );
};

export default RacePage;
