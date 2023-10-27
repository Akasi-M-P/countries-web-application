import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";

const CountryCard = () => {
    const { darkMode } = useContext(ThemeContext)
  return (
    <main
      className={`w-3/4 h-4/5 ${
        darkMode ? "bg-slate-800" : "bg-gray-100"
      } mx-auto mt-10 rounded-md shadow-lg`}
    >
      <section>
        <img
          src="https://flagcdn.com/gh.svg"
          alt="ghana"
          className="rounded-tl-md rounded-tr-md"
        />
      </section>
      <section className="px-4">
        <section className="py-4">
          <p
            className={`${darkMode ? "text-gray-200" : "text-black"} font-bold`}
          >
            Ghana
          </p>
        </section>
        <section className="flex flex-col gap-1 py-4">
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-black font-semibold"
            }`}
          >
            Population:{" "}
            <span
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } font-light`}
            >
              35,000,000
            </span>
          </p>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-black font-semibold"
            }`}
          >
            Region:{" "}
            <span
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } font-light`}
            >
              Africa
            </span>
          </p>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-black font-semibold"
            } `}
          >
            Capital:{" "}
            <span
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } font-light`}
            >
              Accra
            </span>
          </p>
        </section>
      </section>
    </main>
  );
}
export default CountryCard