import { useContext } from "react";
import NavBar from "./NavBar/NavBar";
import { ThemeContext } from "./Theme/ThemeContext";
import SearchBar from "./SearchBar/SearchBar";
import DropDown from "./DropDown/DropDown";
import CountryCard from "./CountryCard/CountryCard";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <main className={darkMode ? "dark-Mode h-full" : "h-full bg-gray-200"}>
        <div>
          <NavBar />
        </div>
        <section className="xl:flex xl:justify-between xl:items-center xl:px-12">
          <div className="xl:w-1/3">
            <SearchBar />
          </div>
          <div className="xl:w-1/5">
            <DropDown />
          </div>
        </section>

        <div>
          <CountryCard />
        </div>
      </main>
    </>
  );
}

export default App
