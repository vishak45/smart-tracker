import { useState } from "react";
import { useGeolocation } from "../hooks/locations";
import { INTERESTS } from "../services/service";
export default function Home() {
  const { location, loading, error } = useGeolocation();
  const [interest, setInterest] = useState(null);

  if (loading) return <p>Getting your location...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Select Interest</h2>

      {INTERESTS.map((item) => (
        <button
          key={item.value}
          onClick={() => setInterest(item.value)}
          style={{
            margin: "5px",
            background: interest === item.value ? "#4f46e5" : "#ddd",
            color: interest === item.value ? "#fff" : "#000"
          }}
        >
          {item.label}
        </button>
      ))}

      {interest && (
        <p>
          Selected: <b>{interest}</b>
        </p>
      )}

      <hr />

      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
}
