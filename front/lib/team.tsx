export async function getTeamInfo() {
  return (
    await fetch("http://185.98.136.60:9090/teams/10", {
      method: "get",
      cache: "no-store",
      headers: new Headers({
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
        "Content-Type": "application/json",
      }),
    })
  ).json();
}
