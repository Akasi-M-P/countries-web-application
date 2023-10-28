/* eslint-disable react/prop-types */

import CountryCard from "../CountryCard/CountryCard";

const CardList = ({ data }) => {
  return (
    <>
      <section className="xl:grid xl:grid-cols-4 xl:gap-5 xl:px-8">
        {data.map((item, index) => (
          <CountryCard
            key={index}
            country={item.name}
            flag={item.flags.svg || item.flags.png}
            population={item.population || "Not Available"}
            capital={item.capital || "Not Available"}
            region={item.region || "Not Available"}
          />
        ))}
      </section>
    </>
  );
};
export default CardList;
