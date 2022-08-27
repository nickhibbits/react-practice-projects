export async function getCoordinates(city, state) {
  const body = {
    city,
    state,
  };

  const response = await fetch("/getCoordinates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data);

  return response;
}

export async function getWeather(lat, lon) {
  const body = {
    lat,
    lon,
  };

  const response = await fetch("/getWeather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data);

  return response;
}
