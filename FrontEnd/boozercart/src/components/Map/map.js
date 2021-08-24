import React, { useState } from "react";

import girlcart from "./../../../src/images/bubbletea.png";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  LoadScript,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { GoogleMapContainer, Search1 } from "./Map.element";
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxPopover,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import "./map.css";
import MapSearch from "./MapSearch";

const libraries = ["places"];
const mapContainerStyle = {
  height: "500px",
  width: "100%",
};

const center = {
  lat: 37.3382,
  lng: -121.8863,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: true,
};

function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAMCarPUCzJ-jITNWCN1-YL_Y8hwHVP6bA",
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const onMapClick = React.useCallback((event) => {
    setMarkers((currrent) => [
      ...currrent,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    console.log("Pan to called", lat, lng);
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    console.log("Done succesfully");
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <GoogleMapContainer>
        {/* <MapSearch></MapSearch> */}
        {/* <Search></Search> */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={11}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: girlcart,
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(20, 20),
              }}
              onMouseOver={() => {
                setSelected(marker);
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{
                lat: selected.lat,
                lng: selected.lng,
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <>
                <h2>Galamart </h2>
                <p>Spotted {formatRelative(selected.time, new Date())}</p>
              </>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </GoogleMapContainer>
    </>
  );
}

export function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => -3.745, lng: () => -38.523 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log("this is lat: ", lat);
            console.log("this is lng: ", lng);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter your address"
        ></ComboboxInput>
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description}></ComboboxOption>
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default React.memo(Map);
