/* eslint-disable react/prop-types */

import CountryCard from "../CountryCard/CountryCard";

const CardList = ({ data }) => {
  return (
    <>
      <section className="xl:grid xl:grid-cols-4 xl:gap-10 xl:px-8">
        {data.map((item, index) => (
          <CountryCard
            key={index}
            country={item.name}
            flag={item.flags.svg || item.flags.png}
            population={item.population || "Not Available"}
            capital={item.capital || "Not Available"}
            region={item.region || "Not Available"}
            nativeName={item.nativeName || "Not Available"}
            subRegion={item.subregion || "Not Available"}
            domain={item.topLevelDomain || "Not Available"}
            currencies={data.currencies?.name || "Not Available"}
            languages={item.languages.name || "Not Available"}
          />
        ))}
      </section>
    </>
  );
};
export default CardList;


