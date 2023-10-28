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
            population={item.population}
            capital={item.capital}
            region={item.region}
            // location={item.location}
            // description={item.description}
            // requirementsContent={item.requirements.content}
            // requirementsItems={item.requirements.items}
            // roleContent={item.role.content}
            // roleItems={item.role.items}
          />
        ))}
      </section>
    </>
  );
};
export default CardList;
