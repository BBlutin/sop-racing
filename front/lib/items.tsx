export async function getCar() {
  return (
    await fetch("http://185.98.136.60:9090/teams/10/inventory/equip", {
      method: "get",
      cache: "no-store",
      headers: new Headers({
        Authorization: "Bearer " + process.env.APP_TOKEN,
        "Content-Type": "application/json",
      }),
    })
  ).json();
}

export async function getInventory() {
  return (
    await fetch("http://185.98.136.60:9090/teams/10/inventory", {
      method: "get",
      cache: "no-store",
      headers: new Headers({
        Authorization: "Bearer " + process.env.APP_TOKEN,
        "Content-Type": "application/json",
      }),
    })
  ).json();
}
