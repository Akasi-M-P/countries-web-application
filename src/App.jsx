import { useContext } from "react";
import NavBar from "./NavBar/NavBar";
import { ThemeContext } from "./Theme/ThemeContext";
import SearchBar from "./SearchBar/SearchBar";
import DropDown from "./DropDown/DropDown";
import CountryCard from "./CountryCard/CountryCard"

function App() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <>
      <main
        className={darkMode ? "dark-Mode h-screen" : "h-screen bg-gray-200"}
      >
        <div>
          <NavBar />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <DropDown />
        </div>
        <div>
          <CountryCard/>
        </div>
      </main>
    </>
  );
}

export default App
