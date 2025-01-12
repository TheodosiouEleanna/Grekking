"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { activities } from "consts";
import Image from "next/image";
const MapSidebar = () => {
  const [selectedActivity, setSelectedActivity] = useState<
    (typeof activities)[0] | null
  >(null);

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='w-1/3 p-4 bg-white border-r'>
        {selectedActivity ? (
          <div>
            <Image
              src={selectedActivity.image}
              alt={selectedActivity.title}
              className='w-full h-40 object-cover mb-4'
            />
            <h2 className='text-lg font-bold'>{selectedActivity.title}</h2>
            <p className='text-sm text-gray-600 mb-2'>
              {selectedActivity.location}
            </p>
            <p className='text-sm'>{selectedActivity.description}</p>
            <a
              href={selectedActivity.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline mt-4 block'
            >
              Περισσότερες Πληροφορίες
            </a>
          </div>
        ) : (
          <p>Επιλέξτε μια δραστηριότητα από τον χάρτη.</p>
        )}
      </div>

      {/* Map */}
      <div className='w-2/3'>
        <MapContainer
          center={[39.8, 22.0]} // Centered near Thessaly
          zoom={8}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='© OpenStreetMap contributors'
          />
          {activities.map((activity) => (
            <Marker
              key={activity.id}
              position={activity.position as LatLngExpression}
              eventHandlers={{
                click: () => {
                  setSelectedActivity(activity);
                },
              }}
            >
              <Popup>{activity.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSidebar;
