import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.section 
      className="w-full bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated gradient overlay on map entrance */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          background: 'linear-gradient(to bottom, #03163B 0%, transparent 30%, transparent 70%, #03163B 100%)',
        }}
      />
      
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
                <button className="mt-2 bg-custom-red text-white px-4 py-1 rounded-full text-sm transition">
                  Itinéraire
                </button>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>

      {/* Address overlay with entrance animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-lg pointer-events-auto">
                <span className="font-medium">📍 Les berges du lac 2, En face de clinique Hannibal, Tunis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative pulsing dots */}
      <motion.div 
        className="absolute bottom-24 right-8 z-10 flex gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-custom-red"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Map;