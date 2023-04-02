const BestTime = ({ time }: { time: number }) => {
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

  return (
    <div className="flex justify-center mt-4">
      <h3 className="mr-3">Record :</h3>
      <span className="font-semibold ">{secondsToHms(time)}</span>
    </div>
  );
};

export default BestTime;
