/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsArrowLeft } from "react-icons/bs";

const CountryCard = ({
  country,
  flag,
  population,
  region,
  capital,
  nativeName,
  subRegion,
  domain,
  currencies,
  languages,
}) => {
  const { darkMode } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <main
      className={`w-3/4 h-full xl:w-11/12  ${
        darkMode ? "bg-slate-800" : "bg-gray-100"
      } mx-auto mt-10 rounded-md shadow-lg`}
      onClick={() => setOpen(true)}
    >
      <section>
        <img src={flag} alt="ghana" className=" rounded-tl-md rounded-tr-md " />
      </section>
      <section className="px-4">
        <section className="py-4">
          <p
            className={`${darkMode ? "text-gray-200" : "text-black"} font-bold`}
          >
            {country}
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
              {population}
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
              {region}
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
              {capital}
            </span>
          </p>
        </section>
      </section>
      {/* MODAL */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            <span>
                              <BsArrowLeft className="text-black" />
                            </span>
                            Back
                          </button>
                        </div>

                        <div className="mt-2">
                          <section>
                            <img
                              src={flag}
                              alt="ghana"
                              className=" rounded-tl-md rounded-tr-md "
                            />
                          </section>
                          <section className="px-4">
                            <section className="py-4">
                              <p
                                className={`${
                                  darkMode ? "text-gray-200" : "text-black"
                                } font-bold`}
                              >
                                {country}
                              </p>
                            </section>
                            <section className="flex flex-col gap-1 py-4">
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
                                    darkMode ? "text-gray-300" : "text-black"
                                  } font-light`}
                                >
                                  {nativeName}
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
                                    darkMode ? "text-gray-300" : "text-black"
                                  } font-light`}
                                >
                                  {population}
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
                                    darkMode ? "text-gray-300" : "text-black"
                                  } font-light`}
                                >
                                  {region}
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
                                    darkMode ? "text-gray-300" : "text-black"
                                  } font-light`}
                                >
                                  {subRegion}
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
                                    darkMode ? "text-gray-300" : "text-black"
                                  } font-light`}
                                >
                                  {capital}
                                </span>
                              </p>
                            </section>
                          </section>
                          {/* SECOND SECTION */}
                          <section className="flex flex-col gap-1 py-4 px-4">
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
                                {domain}
                              </span>
                            </p>
                            <p
                              className={`${
                                darkMode
                                  ? "text-gray-300"
                                  : "text-black font-semibold"
                              }`}
                            >
                              Currencies:{" "}
                              <span
                                className={`${
                                  darkMode ? "text-gray-300" : "text-black"
                                } font-light`}
                              >
                                {currencies}
                              </span>
                            </p>
                            <p
                              className={`${
                                darkMode
                                  ? "text-gray-300"
                                  : "text-black font-semibold"
                              }`}
                            >
                              Languages:{" "}
                              <span
                                className={`${
                                  darkMode ? "text-gray-300" : "text-black"
                                } font-light`}
                              >
                                {languages}
                              </span>
                            </p>
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
  );
};
export default CountryCard;
