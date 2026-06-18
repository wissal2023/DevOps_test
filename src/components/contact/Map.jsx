import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom red marker with shadow
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  const position = [36.8356, 10.2481];
  
  return (
    <section className="w-full bg-white relative">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={true}
        className="w-full h-[600px] md:h-[70vh]"
        style={{ borderRadius: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={redIcon}>
          <Popup>
            <div className="text-center p-2">
              <strong className="text-primary-dark">Global Leaders Trade</strong>
              <p className="text-gray-600 text-sm mt-1">
                Les berges du lac 2<br />
                En face de clinique Hannibal<br />
                Tunis, Tunisie
              </p>
              <button className="mt-2 bg-custom-red text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition">
                Itinéraire
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;