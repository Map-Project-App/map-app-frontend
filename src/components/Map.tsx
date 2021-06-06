import React from 'react';

import { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type IMapProps = {
  center: LatLngTuple;
  zoom: number;
  marker: LatLngTuple;
  onClick: (e: { latlng: React.SetStateAction<LatLngTuple> }) => void;
};

const Map = ({
  center, zoom, marker, onClick,
}: IMapProps) => (
  <MapContainer
    style={{ height: '60vh' }}
    key={JSON.stringify([center[0], center[1]])}
    center={center}
    zoom={zoom}
    onClick={onClick}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[marker[0], marker[1]]} />
  </MapContainer>
);

export default Map;
