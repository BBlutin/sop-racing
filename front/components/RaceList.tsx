"use client";

import Race from "@/components/Race";
import { useState } from "react";

const RaceList = ({ bestTime }: { bestTime: any }) => {
  const [active, setActive] = useState("official");

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-slate-600">Les circuits</h1>
        <div className="flex">
          <button
            className={`${
              active === "official" ? "activeRaceButton" : "raceButton"
            }`}
            onClick={() => setActive("official")}
          >
            Courses officielles
          </button>
          <button
            className={`${
              active != "official" ? "activeRaceButton" : "raceButton"
            }`}
            onClick={() => setActive("unofficial")}
          >
            Courses optionnelles
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12">
        {active === "official" ? (
          <>
            <Race
              time={bestTime[0].time}
              name="Daytona"
              image="daytona"
              id={1}
            />
            <Race
              time={bestTime[1].time}
              name="Brazilia"
              image="brazilia"
              id={2}
            />
            <Race
              time={bestTime[2].time}
              name="San Francisco"
              image="san_francisco"
              id={3}
            />
            <Race
              time={bestTime[3].time}
              name="Helsinky"
              image="helsinky"
              id={4}
            />
            <Race time={bestTime[4].time} name="Monaco" image="monaco" id={5} />
            <Race
              time={bestTime[5].time}
              name="Grand Canyon"
              image="grand_canyon"
              id={6}
            />
            <Race
              time={bestTime[6].time}
              name="Vancouver"
              image="vancouver"
              id={7}
            />
            <Race time={bestTime[7].time} name="Sydney" image="sydney" id={8} />
            <Race time={bestTime[8].time} name="Fuji" image="fuji" id={9} />
            <Race
              time={bestTime[9].time}
              name="Le Mans"
              image="le_mans"
              id={10}
            />
          </>
        ) : (
          <>
            <Race
              time={bestTime[10].time}
              name="Sahara"
              image="sahara"
              id={11}
            />
            <Race time={bestTime[11].time} name="Bali" image="bali" id={12} />
            <Race
              time={bestTime[12].time}
              name="Everest"
              image="everest"
              id={13}
            />
            <Race time={bestTime[13].time} name="Mars" image="mars" id={14} />
            <Race
              time={bestTime[14].time}
              name="Circuit des 24h"
              image="circuit_24h"
              id={15}
            />
          </>
        )}
      </div>
    </>
  );
};

export default RaceList;
