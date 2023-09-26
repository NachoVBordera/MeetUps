import React from "react";
import Select from "react-select";
import cities from "../../../public/poblaciones.json";
import { useCitySearch } from "../../hooks/useCitySearch";
import frame from "../../assets/Frame.png";
import { useNavigate } from "react-router-dom";
import "./search.css";
const SeachBar: React.FC = () => {
  const navegate = useNavigate();
  const {
    selectedCity,
    filteredCities,
    isSearching,
    handleCityChange,
    handleInputChange,
  } = useCitySearch(cities);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedCity) return;

    const formatedUbication = selectedCity.value.split("/").join(" ");
    navegate(`/meets/${formatedUbication}`);
  };

  return (
    <section className="inputSection" role="input section">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Select
          options={isSearching ? [] : filteredCities}
          onInputChange={handleInputChange}
          onChange={handleCityChange}
          value={selectedCity}
          placeholder="Donde será tu proxima aventura?"
          isClearable={true}
          className="inputSelect"
        />
        <button role="button" className="submitbutton">
          <img src={frame} alt="magnifying-glass" />
        </button>
      </form>
    </section>
  );
};

export default SeachBar;
