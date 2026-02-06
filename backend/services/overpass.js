import fetch from "node-fetch";
import { INTEREST_TAGS } from "./interestMap.js";

export async function fetchPlaces({ lat, lng, interest }) {
  const tags = INTEREST_TAGS[interest];

  if (!tags) {
    throw new Error("Invalid interest");
  }

  const query = `
    [out:json];
    (
      ${tags
        .map(
          (tag) => `node${tag}(around:5000,${lat},${lng});`
        )
        .join("\n")}
    );
    out body;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query
  });

  const data = await res.json();

  return data.elements.map((el) => ({
    id: el.id,
    name: el.tags?.name || "Unnamed place",
    lat: el.lat,
    lng: el.lon,
    type: interest
  }));
}
