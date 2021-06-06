import React, { useState } from 'react';

import { LatLngTuple } from 'leaflet';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Form from '../../components/Form';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

// Disable server-side rendering to prevent "ReferenceError: window is not defined"
// https://github.com/Leaflet/Leaflet/issues/6552#issuecomment-711028109
// https://stackoverflow.com/questions/57704196/leaflet-with-next-js/64634759#64634759
const MapNoSSR = dynamic(() => import('../../components/Map'), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

const MapPage = () => {
  const [center, setCenter] = useState<LatLngTuple>([40.0067, -83.0305]);
  const [marker, setMarker] = useState<LatLngTuple>([40.0067, -83.0305]);

  const handleClick = (e: { latlng: React.SetStateAction<LatLngTuple> }) => {
    setMarker(e.latlng);
    alert(e.latlng);
  };

  const handleLocationSearch = (location: string) => {
    const latlng = location.split(', ');
    setCenter([parseFloat(latlng[0]), parseFloat(latlng[1])]);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        />
      </Head>
      <Main meta={<Meta title="Map" description="map page" />}>
        <Form
          placeholder="Enter a location (city, state, lat/long...)"
          onSubmit={handleLocationSearch}
        />
        <MapNoSSR center={center} zoom={14} marker={marker} onClick={handleClick} />
      </Main>
    </>
  );
};

export default MapPage;
