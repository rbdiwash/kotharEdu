import React from "react";
import australia from "../../assets/images/australia.png";
import { BiChevronRight, BiMap } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import useKothar from "../../context/useKothar";

const Cities = () => {
  const [{ destinations }] = useKothar();
  const list = destinations?.length > 0 ? destinations : [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-second rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-altSecond rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container mx-auto px-0 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <BiMap className="text-primary text-xl" />
            <span className="text-gray-600 font-medium">
              Study Destinations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Where do you want to study?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We recommend the best colleges in the most promising destinations to
            build your career.
          </p>
        </div>

        {/* Bento-style grid: one large + rest in grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 grid-rows-auto my-4 max-w-6xl mx-auto">
          {list.map((item, index) => (
            <NavLink
              key={item?.id}
              to={`/states/${item?.destination}`}
              state={{ data: item }}
              className={`group relative overflow-hidden rounded-2xl flex flex-col justify-end ${
                index === 0
                  ? "min-h-[280px] md:col-span-2 md:row-span-2 md:min-h-[420px]"
                  : "min-h-[200px] md:min-h-[200px]"
              }`}
            >
              <img
                loading="lazy"
                src={item?.image || australia}
                alt={item?.destination || "Study Destination"}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative p-5 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                  {item?.destination || "Destination"}
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  Explore study opportunities
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium mt-2 text-white/90 group-hover:text-white group-hover:gap-2 transition-all">
                  Learn more
                  <BiChevronRight className="text-lg" />
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-700 font-medium">
              Ready to explore your options?
            </span>
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-primary to-second text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
