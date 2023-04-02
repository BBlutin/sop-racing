export async function getBestTime(raceId: number) {
  return (
    await fetch(
      "http://185.98.136.60:9090/races/" + raceId + "/teamRace/10/bestTime",
      {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
          "Content-Type": "application/json",
        }),
      }
    )
  ).json();
}
