import { useContext } from "react";
import NavBar from "./NavBar/NavBar";
import { ThemeContext } from "./Theme/ThemeContext";
import SearchBar from "./SearchBar/SearchBar";
import DropDown from "./DropDown/DropDown";
import data from "./data.json";

import CardList from "./CardList/CardList";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <main className={darkMode ? "dark-Mode h-full" : "h-screen bg-gray-200"}>
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
          <CardList data={data} />
        </div>
      </main>
    </>
  );
}

export default App
