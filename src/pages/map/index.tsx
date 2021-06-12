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
  const [marker] = useState<LatLngTuple>([40.0067, -83.0305]);
  const [zoom] = useState<number>(14);

  const handleLocationSearch = (location: string) => {
    const encodedLocation = encodeURIComponent(location.trim());
    fetch(
      `https://us1.locationiq.com/v1/search.php?key=${process.env.NEXT_PUBLIC_GEOCODING_KEY}&q=${encodedLocation}&format=json`,
    )
      .then((result) => result.json())
      .then(
        (result) => {
          setCenter([result[0].lat, result[0].lon]);
        },
        (error) => {
          alert(error);
        },
      );
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
          placeholder="Enter a location (country, city, state, ZIP code...)"
          onSubmit={handleLocationSearch}
        />
        <MapNoSSR center={center} zoom={zoom} marker={marker} />
      </Main>
    </>
  );
};

export default MapPage;
