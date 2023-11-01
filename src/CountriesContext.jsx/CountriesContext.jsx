/* eslint-disable react/prop-types */
import { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";

const RegionContext = createContext();

const regionReducer = (state, action) => {
  switch (action.type) {
    case "SET_REGION":
      return action.payload;
    case "RESET_REGION":
      return "Filter by Region"; // Reset to "All" region
    default:
      return state;
  }
};

const RegionProvider = ({ children }) => {
  const [selectedRegion, dispatch] = useReducer(
    regionReducer,
    "Filter by Region" // Initialize with "All"
  );
  const [openStates, setOpenStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setCountries(data);
        setOpenStates(new Array(data.length).fill(false));
        setFilteredCountries(data); // Initialize filteredCountries with all countries
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Add a useEffect to update the filteredCountries based on the selected region
  useEffect(() => {
    if (selectedRegion === "Filter by Region") {
      // If the region is not selected, show all countries
      setFilteredCountries(countries);
    } else {
      // Filter countries based on the selected region
      const filtered = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(filtered);
    }
  }, [selectedRegion, countries]);

  const toggleOpenState = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <RegionContext.Provider
      value={{
        selectedRegion,
        dispatch,
        countries,
        filteredCountries,
        toggleOpenState,
        openStates,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export { RegionContext, RegionProvider };
