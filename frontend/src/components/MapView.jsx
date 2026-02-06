import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const greenIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapView({ userLocation, places }) {
  return (
    <MapContainer
      center={[userLocation.lat, userLocation.lng]}
      zoom={14}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User marker */}
      <Marker position={[userLocation.lat, userLocation.lng]} icon={greenIcon}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Place markers */}
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng]}
        >
          <Popup>
            <b>{place.name}</b>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
