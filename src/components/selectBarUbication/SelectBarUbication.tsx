import React from "react";
import Select, { SingleValue } from "react-select";
import cities from "../../../public/poblaciones.json";
import { useCitySearch } from "../../hooks/useCitySearch";
import "./search.css";
import { city } from "../../types/cities";
interface SelectBarUbicationProps {
  onCityChange: (e: SingleValue<city>) => void;
}
const SelectBarUbication: React.FC<SelectBarUbicationProps> = ({
  onCityChange,
}) => {
  const {
    selectedCity,
    filteredCities,
    isSearching,
    handleCityChange,
    handleInputChange,
  } = useCitySearch(cities);

  return (
    <Select
      options={isSearching ? [] : filteredCities}
      onInputChange={handleInputChange}
      onChange={(e) => {
        handleCityChange(e);
        onCityChange(e);
      }}
      value={selectedCity}
      placeholder="Donde será tu proxima aventura?"
      isClearable={true}
      className="inputSelect"
    />
  );
};

export default SelectBarUbication;
