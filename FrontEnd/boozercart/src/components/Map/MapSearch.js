import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
  useJsApiLoader,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

import "./MapSearch.css";

const libraries = ["places"];

const MapSearch = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (value) => {
    console.log("Thios is map change value", value);
    setValue(value, false);
  };

  const onPlaceChanged = () => {
    const lat = Autocomplete.getPlace().geometry.location.lat();
    const lng = Autocomplete.getPlace().geometry.location.lng();
  };

  return (
    <>
      <Combobox
        className="ComboBox"
        onSelect={handleSelect}
        aria-labelledby="demo"
      >
        <ComboboxInput
          className="ComboboxInput"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Enter your delivary address"
        />
        <ComboboxPopover >
          <ComboboxList className="places-list">
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption
                  className="single-place"
                  key={place_id}
                  value={description}
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
};

export default React.memo(MapSearch);
