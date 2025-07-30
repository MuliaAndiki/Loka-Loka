'use client';
import { LocationMarkerProps } from '../types/components';
import { Marker, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L, { LatLng } from 'leaflet';

const LocationMarker = ({ markerRef, setLatLng }: LocationMarkerProps) => {
  const [position, setPosition] = useState<LatLng | null>(null);

  const Icon = L.icon({
    iconUrl: '/asset/map-pin.svg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      if (setLatLng) setLatLng(e.latlng.lat, e.latlng.lng);
    },
  });

  return position ? (
    <Marker
      position={position}
      icon={Icon}
      ref={(ref) => {
        if (ref) markerRef.current = ref;
      }}
    />
  ) : null;
};

export default LocationMarker;
