import React from 'react';

import { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type IMapProps = {
  center: LatLngTuple;
  zoom: number;
  marker: LatLngTuple;
};

const Map = ({ center, zoom, marker }: IMapProps) => (
  <MapContainer
    style={{ height: '60vh' }}
    key={center[0] + center[1] + marker[0] + marker[1]}
    center={center}
    zoom={zoom}
  >
    <Marker position={[marker[0], marker[1]]} />
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

export default Map;
