/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

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

  return (
    <RegionContext.Provider value={{ selectedRegion, dispatch }}>
      {children}
    </RegionContext.Provider>
  );
};

export { RegionContext, RegionProvider };
