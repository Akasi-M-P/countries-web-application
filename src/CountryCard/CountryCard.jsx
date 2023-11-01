/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsArrowLeft } from "react-icons/bs";
import { ThemeContext } from "../Theme/ThemeContext";
import { RegionContext } from "../CountriesContext.jsx/CountriesContext";
import axios from "axios";

const CountryCard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { selectedRegion } = useContext(RegionContext);

  const [openStates, setOpenStates] = useState([]);
  const cancelButtonRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleRegion = (formData) => {
    if (formData.region !== "Filter by Region") {
      const filteredByRegion = countries.filter(
        (country) =>
          country.region.toLowerCase() === formData.region.toLowerCase()
      );
      setFilteredCountries(filteredByRegion);
    } else {
      setFilteredCountries(countries);
    }
  };

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

  const toggleOpenState = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="xl:grid xl:grid-cols-4 xl:gap-4 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-4  hover:cursor-pointer">
      {filteredCountries.map((country, index) => (
        <main
          key={index}
          className={`w-3/4 md:w-10/12 lg:w-11/12 h-full xl:w-11/12 ${
            darkMode ? "bg-slate-800" : "bg-gray-100"
          } mx-auto mt-10 rounded-md shadow-lg`}
          onClick={() => toggleOpenState(index)}
        >
          <section>
            <img
              src={country.flags.png || country.flags.svg}
              alt={country.flags.alt}
              className="w-full rounded-tl-md rounded-tr-md"
            />
          </section>
          <section className="px-4">
            <section className="py-4">
              <p
                className={`${
                  darkMode ? "text-gray-200" : "text-black"
                } font-bold`}
              >
                {country.name.common}
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
                  {country.population}
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
                  {country.region}
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
                  {country.capital}
                </span>
              </p>
            </section>
          </section>
        </main>
      ))}
      {countries.map((country, index) => (
        <main
          key={index}
          className={`w-3/4 h-full xl:w-11/12 ${
            darkMode ? "bg-slate-800" : "bg-gray-100"
          } mx-auto mt-10 rounded-md shadow-lg`}
          onClick={() => toggleOpenState(index)}
        >
          <section>
            <img
              src={country.flags.png || country.flags.svg}
              alt={country.flags.alt}
              className="w-full rounded-tl-md rounded-tr-md"
            />
          </section>
          <section className="px-4">
            <section className="py-4">
              <p
                className={`${
                  darkMode ? "text-gray-200" : "text-black"
                } font-bold`}
              >
                {country.name.common}
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
                  {country.population}
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
                  {country.region}
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
                  {country.capital}
                </span>
              </p>
            </section>
          </section>
          {/* MODAL */}
          <Transition.Root show={openStates[index]} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={() => toggleOpenState(index)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <div className="py-5 flex">
                              <button
                                type="button"
                                className="mt-3 inline-flex w-1/5 justify-center items-center gap-2 rounded-md bg-white px-12 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => toggleOpenState(index)}
                                ref={cancelButtonRef}
                              >
                                <span>
                                  <BsArrowLeft className="text-black" />
                                </span>
                                Back
                              </button>
                            </div>

                            <div className="mt-2 flex flex-col">
                              <section>
                                <img
                                  src={country.flags.svg || country.flags.png}
                                  alt={country.flags.alt}
                                  className="rounded-tl-md rounded-tr-md"
                                />
                              </section>
                              <section className="px-4">
                                <section className="py-4">
                                  <p
                                    className={`${
                                      darkMode ? "text-gray-200" : "text-black"
                                    } font-bold `}
                                  >
                                    {country.name.common}
                                  </p>
                                </section>
                                <section className="flex flex-col items-start gap-1 py-4">
                                  <p
                                    className={`${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-black font-semibold"
                                    }`}
                                  >
                                    Native Name:{" "}
                                    <span
                                      className={`${
                                        darkMode
                                          ? "text-gray-300"
                                          : "text-black"
                                      } font-light`}
                                    >
                                      {country?.name.official}
                                    </span>
                                  </p>
                                  <p
                                    className={`${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-black font-semibold"
                                    }`}
                                  >
                                    Population:{" "}
                                    <span
                                      className={`${
                                        darkMode
                                          ? "text-gray-300"
                                          : "text-black"
                                      } font-light`}
                                    >
                                      {country.population}
                                    </span>
                                  </p>
                                  <p
                                    className={`${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-black font-semibold"
                                    }`}
                                  >
                                    Region:{" "}
                                    <span
                                      className={`${
                                        darkMode
                                          ? "text-gray-300"
                                          : "text-black"
                                      } font-light`}
                                    >
                                      {country.region}
                                    </span>
                                  </p>
                                  <p
                                    className={`${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-black font-semibold"
                                    }`}
                                  >
                                    Sub Region:{" "}
                                    <span
                                      className={`${
                                        darkMode
                                          ? "text-gray-300"
                                          : "text-black"
                                      } font-light`}
                                    >
                                      {country.subregion || "Not Available"}
                                    </span>
                                  </p>
                                  <p
                                    className={`${
                                      darkMode
                                        ? "text-gray-300"
                                        : "text-black font-semibold"
                                    } `}
                                  >
                                    Capital:{" "}
                                    <span
                                      className={`${
                                        darkMode
                                          ? "text-gray-300"
                                          : "text-black"
                                      } font-light`}
                                    >
                                      {country.capital || "Not Available"}
                                    </span>
                                  </p>
                                </section>
                              </section>
                              {/* SECOND SECTION */}
                              <section className="flex flex-col gap-1 py-4 px-4 items-start">
                                <p
                                  className={`${
                                    darkMode
                                      ? "text-gray-300"
                                      : "text-black font-semibold"
                                  }`}
                                >
                                  Top Level Domain:{" "}
                                  <span
                                    className={`${
                                      darkMode ? "text-gray-300" : "text-black"
                                    } font-light`}
                                  >
                                    {country.tld || "Not Available"}
                                  </span>
                                </p>
                                {country.currencies &&
                                  Object.keys(country.currencies).map(
                                    (currencyCode, index) => (
                                      <div key={index}>
                                        <p
                                          className={`${
                                            darkMode
                                              ? "text-gray-300"
                                              : "text-black font-semibold"
                                          }`}
                                        >
                                          Currency :{" "}
                                          <span
                                            className={`${
                                              darkMode
                                                ? "text-gray-300"
                                                : "text-black"
                                            } font-light`}
                                          >
                                            {
                                              country.currencies[currencyCode]
                                                ?.name
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    )
                                  )}
                                {country.languages &&
                                  Object.keys(country.languages).map(
                                    (languageCode, index) => (
                                      <div key={index}>
                                        <p
                                          className={`${
                                            darkMode
                                              ? "text-gray-300"
                                              : "text-black font-semibold"
                                          }`}
                                        >
                                          Language :{" "}
                                          <span
                                            className={`${
                                              darkMode
                                                ? "text-gray-300"
                                                : "text-black"
                                            } font-light`}
                                          >
                                            {country.languages[languageCode]}
                                          </span>
                                        </p>
                                      </div>
                                    )
                                  )}
                                {country.borders &&
                                  country.borders.length > 0 && (
                                    <div className="mt-2 flex flex-col items-start">
                                      <p
                                        className={`${
                                          darkMode
                                            ? "text-gray-300"
                                            : "text-black font-semibold"
                                        }`}
                                      >
                                        Border Countries:
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {country.borders.map(
                                          (borderCountryCode, index) => (
                                            <button
                                              key={index}
                                              className={`bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md`}
                                            >
                                              {borderCountryCode}
                                            </button>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </main>
      ))}
    </div>
  );
};

export default CountryCard;
