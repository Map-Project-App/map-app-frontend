import React from 'react';

import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

export interface IMapProps {
  center: LatLngTuple;
  zoom: number;
}

const Map = ({ center, zoom }: IMapProps) => (
  <MapContainer style={{ height: '100vh' }} center={center} zoom={zoom}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

export default Map;
