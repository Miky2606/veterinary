import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useState, useCallback } from "react";
import { Buttons } from "../buttons/buttons";

export const MapView = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_API as string,
  });
  const containerStyle = {
    width: "100%",
    height: "85%",
  };

  const center = {
    lat: 26.545868518452068,
    lng: -81.80553986163396,
  };
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <div className="p-2 absolute">
        <Link
          href={
            "https://www.google.com/maps?daddr=13650+Fiddle+Sticks+Blvd+Ste+203+Fort+Myers+FL+33912"
          }
          target="_blank"
        >
          <Buttons text="get directions" />
        </Link>
      </div>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};
