import React from 'react';

import { LatLngTuple } from 'leaflet';
import {
  MapContainer, Marker, Popup, TileLayer, useMapEvents,
} from 'react-leaflet';

type IMapProps = {
  center: LatLngTuple;
  zoom: number;
  marker: LatLngTuple;
  onClick: ([x, y]: LatLngTuple) => void;
};

const Map = ({
  center, zoom, marker, onClick,
}: IMapProps) => {
  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        onClick([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      style={{ height: '60vh' }}
      key={center[0] + center[1]}
      center={center}
      zoom={zoom}
    >
      <MapEvents />
      <Marker position={marker}>
        <Popup>
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-md border-4 text-white py-1 px-4 rounded"
            type="button"
          >
            Upload here!
          </button>
        </Popup>
      </Marker>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
