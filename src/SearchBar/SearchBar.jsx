import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../Theme/ThemeContext";
// import { UserContext } from "../UserContext/UserContext";

const SearchBar = () => {
  // Get darkMode, error, userName, handleUserName, and setUserName from respective contexts
  const { darkMode } = useContext(ThemeContext);
//   const { error, userName, handleUserName, setUserName } =
//     useContext(UserContext);

//   const handleSearch = () => {
//     handleUserName(); // Call the function to fetch data
//     setUserName(""); // Clear the input field
//   };

  return (
    <main
      className={
        darkMode
          ? "w-11/12 md:w-11/12 lg:w-10/12 xl:w-full  2xl:lg:w-9/12 flex items-center justify-between mx-auto rounded-lg bg-var(--dark-blue) shadow-md px-8 py-2 mt-6"
          : "w-11/12 md:w-11/12 lg:w-10/12 xl:w-full 2xl:lg:w-9/12 flex items-center justify-between mx-auto rounded-lg bg-white shadow-md px-8 py-2 mt-6"
      }
    >
      <section className="flex gap-5 items-center w-3/4 xl:w-10/12">
        <FiSearch className="w-5 h-5 md:w-7 md:h-8 lg:w-10 lg:h-10 text-gray-500" />
        <input
          type="text"
          name="userName"
          //   value={userName}
          //   onChange={(e) => setUserName(e.target.value)}
          placeholder="Search for a country..."
          className={
            darkMode
              ? "w-10/12 h-8 bg-slate-800  focus:outline-none text-white font-mono text-xs md:text-base lg:text-xl font-normal leading-6 "
              : "w-10/12 h-8 focus:outline-none font-mono text-xs md:text-base lg:text-xl font-normal leading-6"
          }
        />
      </section>
    </main>
  );
};

export default SearchBar;
