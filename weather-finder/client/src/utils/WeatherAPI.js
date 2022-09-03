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

export async function getWeather(lat, lon, callType) {
  const body = {
    lat,
    lon,
  };

  let response;
  let data;

  if (callType === "current") {
    data = await fetch("/getWeather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => data);
  }

  if (callType === "forecast") {
    console.log("here 🔵");
    data = await fetch("/getForecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log("uhhhh");
        return res.json();
      })
      .then((data) => data);
  }

  response = data;
  return response;
}
