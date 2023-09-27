import React from "react";
import { city } from "../types/cities";

export const useCitySearch = (cities: city[]) => {
  const [selectedCity, setSelectedCity] = React.useState<city | null>(null);
  const [filteredCities, setFilteredCities] = React.useState<city[] | []>([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const handleInputChange = (newValue: string): void => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setFilteredCities(filterCities(newValue));
    }, 1000);
  };

  const handleCityChange = (selectedOption: city | null): void => {
    setSelectedCity(selectedOption);
  };
  const filterCities = (inputValue: string) => {
    return cities.filter((city) =>
      city.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  return {
    selectedCity,
    filteredCities,
    isSearching,
    handleCityChange,
    handleInputChange,
  };
};
