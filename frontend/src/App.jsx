import { useGeolocation } from "../hooks/locations";

export default function Home() {
  const { location, loading, error } = useGeolocation();

  if (loading) return <p>Getting your location...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Your Location</h2>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
}
