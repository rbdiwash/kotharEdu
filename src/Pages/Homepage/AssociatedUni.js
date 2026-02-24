import React from "react";
import australia from "../../assets/images/australia.png";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import useKothar from "../../context/useKothar";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AssociatedUni = ({ title, subtitle, destinationId }) => {
  const [{ uniList }] = useKothar();
  const navigate = useNavigate();

  const getFilteredList = () => {
    if (!destinationId) return uniList ?? [];
    return uniList?.filter((arg) => arg?.destId === destinationId) ?? [];
  };

  const list = getFilteredList();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-0 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <FaGraduationCap className="text-primary text-xl" />
            <span className="text-gray-600 font-medium">
              Partner Institutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {title || "Our Valued Partners"}
          </h2>
          {subtitle ? (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          ) : (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our network of prestigious partner institutions that
              offer world-class education and exceptional opportunities for
              international students.
            </p>
          )}
        </div>

        {list.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {list.slice(0, 8).map((item, index) => (
                <PartnerTile key={item?.id} item={item} index={index} />
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => navigate("/partner-institutions")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-4 rounded-xl font-semibold hover:from-second hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View all partners
                <FiExternalLink className="text-lg" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Universities Available
              </h3>
              <p className="text-gray-600">
                Check back soon for our partner institutions.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const PartnerTile = ({ item, index }) => {
  const hasWebsite = item?.website;
  const Wrapper = hasWebsite ? "a" : "div";
  const wrapperProps = hasWebsite
    ? {
        href: item.website,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group group/tile flex flex-col rounded-2xl overflow-hidden bg-white/90 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          loading="lazy"
          src={item?.image || australia}
          alt={item?.name || "Partner institution"}
          className="w-full h-full object-cover group-hover/tile:scale-105 transition-transform duration-400"
        />
        {hasWebsite && (
          <div className="absolute inset-0 bg-primary/0 group-hover/tile:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover/tile:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white/95 text-primary font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
              Visit site
              <FiExternalLink className="text-sm" />
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-800 group-hover/tile:text-primary transition-colors line-clamp-2 text-sm sm:text-base">
          {item?.name}
        </h3>
        {item?.location && (
          <p className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mt-1">
            <FiMapPin className="text-primary shrink-0" />
            <span className="line-clamp-1">{item.location}</span>
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default AssociatedUni;
