import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ThemeContext } from "../Theme/ThemeContext";
import { RegionContext } from "../CountriesContext.jsx/CountriesContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RegionDropDown() {
  const { darkMode } = useContext(ThemeContext);
  const { dispatch, selectedRegion } = useContext(RegionContext);

  const handleRegionChange = (region) => {
    dispatch({ type: "SET_REGION", payload: region }); // Update the selected region
  };

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]; // Define available regions

  return (
    <Menu
      as="div"
      className="relative inline-block w-1/2 text-left mt-5 px-4 xl:px-0 xl:w-full"
    >
      <div className="w-full xl:w-full">
        <Menu.Button
          className={`inline-flex w-11/12 xl:w-full justify-center gap-x-1.5 rounded-md ${
            darkMode ? "bg-slate-800 text-gray-300" : "bg-white text-gray-900"
          }  px-3 py-2 text-sm font-semibold shadow-md xl:w-full xl:py-4 xl:text-lg`}
        >
          {selectedRegion}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 xl:h-8 xl:w-8 text-gray-300"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-4 z-10 mt-2 w-36 xl:w-full xl:left-0 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className={`py-1 rounded-md w-full xl:w-full ${
              darkMode ? "bg-slate-800 shadow-lg" : ""
            }`}
          >
            {regions.map((region) => (
              <Menu.Item key={region}>
                {({ active }) => (
                  <button
                    onClick={() => handleRegionChange(region)}
                    className={classNames(
                      active ? "text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm xl:text-lg",
                      darkMode ? "text-gray-100" : "",
                      "hover:text-purple-600"
                    )}
                  >
                    {region}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
