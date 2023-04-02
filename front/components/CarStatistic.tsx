const CarStatistic = ({ stats }: { stats: Stats }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Puissance</h3>
          <h4 className="text-2xl font-bold">{stats.power}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.power < 10 ? "bg-red-400" : ""
            } ${stats.power > 24 && stats.power < 40 ? "bg-yellow-400" : ""} ${
              stats.power > 9 && stats.power < 25 ? "bg-orange-400" : ""
            } ${stats.power > 39 && stats.power <= 60 ? "bg-green-400" : ""}`}
            style={{ ["width" as any]: (stats.power * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Poids</h3>
          <h4 className="text-2xl font-bold">{stats.weight}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.weight < 10 ? "bg-green-400" : ""
            } ${
              stats.weight > 24 && stats.weight < 40 ? "bg-orange-400" : ""
            } ${stats.weight > 9 && stats.weight < 25 ? "bg-yellow-400" : ""} ${
              stats.weight > 39 && stats.weight <= 60 ? "bg-red-400" : ""
            }`}
            style={{ ["width" as any]: (stats.weight * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Acceleration</h3>
          <h4 className="text-2xl font-bold">{stats.acceleration}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.acceleration < 10 ? "bg-red-400" : ""
            } ${
              stats.acceleration > 24 && stats.acceleration < 40
                ? "bg-yellow-400"
                : ""
            } ${
              stats.acceleration > 9 && stats.acceleration < 25
                ? "bg-orange-400"
                : ""
            } ${
              stats.acceleration > 39 && stats.acceleration <= 60
                ? "bg-green-400"
                : ""
            }`}
            style={{ ["width" as any]: (stats.acceleration * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Usure</h3>
          <h4 className="text-2xl font-bold">{stats.wear}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.wear < 10 ? "bg-green-400" : ""
            } ${stats.wear > 24 && stats.wear < 40 ? "bg-orange-400" : ""} ${
              stats.wear > 9 && stats.wear < 25 ? "bg-yellow-400" : ""
            } ${stats.wear > 39 && stats.wear <= 60 ? "bg-red-400" : ""}`}
            style={{ ["width" as any]: (stats.wear * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Grip</h3>
          <h4 className="text-2xl font-bold">{stats.grip}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.grip < 10 ? "bg-red-400" : ""
            } ${stats.grip > 24 && stats.grip < 40 ? "bg-yellow-400" : ""} ${
              stats.grip > 9 && stats.grip < 25 ? "bg-orange-400" : ""
            } ${stats.grip > 39 && stats.grip <= 60 ? "bg-green-400" : ""}`}
            style={{ ["width" as any]: (stats.grip * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Consommation</h3>
          <h4 className="text-2xl font-bold">{stats.energy}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.energy < 10 ? "bg-green-400" : ""
            } ${
              stats.energy > 24 && stats.energy < 40 ? "bg-orange-400" : ""
            } ${stats.energy > 9 && stats.energy < 25 ? "bg-yellow-400" : ""} ${
              stats.energy > 39 && stats.energy <= 60 ? "bg-red-400" : ""
            }`}
            style={{ ["width" as any]: (stats.energy * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mr-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3>Maniabilité</h3>
          <h4 className="text-2xl font-bold">{stats.handling}</h4>
        </div>
        <div className="w-full h-1 overflow-visible rounded-full bg-neutral-200">
          <div
            className={`h-2 rounded-full -mt-[2px] ${
              stats.handling < 10 ? "bg-red-400" : ""
            } ${
              stats.handling > 24 && stats.handling < 40 ? "bg-yellow-400" : ""
            } ${
              stats.handling > 9 && stats.handling < 25 ? "bg-orange-400" : ""
            } ${
              stats.handling > 39 && stats.handling <= 60 ? "bg-green-400" : ""
            }`}
            style={{ ["width" as any]: (stats.handling * 100) / 60 + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CarStatistic;
