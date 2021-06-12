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
        <Popup>Upload an image to this location!</Popup>
      </Marker>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
