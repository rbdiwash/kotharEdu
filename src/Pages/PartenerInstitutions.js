import React, { useState } from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import {
  FiExternalLink,
  FiMapPin,
  FiFilter,
  FiGrid,
  FiList,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import australia from "../assets/images/australia.png";
import useKothar from "../context/useKothar";

const PartenerInstitutions = () => {
  const [{ uniList }, {}] = useKothar();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Get unique locations for filter
  const locations = [
    ...new Set(uniList?.map((uni) => uni?.location).filter(Boolean)),
  ];

  // Filter universities based on search and location
  const filteredUniversities = uniList?.filter((uni) => {
    const matchesSearch = uni?.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      !selectedLocation || uni?.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <BiChevronRight className="text-xl" />
              <span className="text-primary font-semibold">
                Partner Institutions
              </span>
            </div>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FaGraduationCap className="text-primary text-xl" />
              <span className="text-gray-600 font-medium">Our Partners</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Partner Institutions
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our extensive network of prestigious partner institutions
              that offer world-class education and exceptional opportunities for
              international students across Australia and beyond.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-primary mb-2">
                {uniList?.length || 0}
              </div>
              <div className="text-gray-600 font-medium">Total Partners</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-second mb-2">
                {locations?.length || "10+"}
              </div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-4 items-end">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Institutions
                </label>
                <div className="relative">
                  <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by institution name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Locations</option>
                  {locations?.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  View Mode
                </label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 transition-colors duration-200 ${
                      viewMode === "grid"
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <FiGrid className="text-sm" />
                    <span className="text-sm font-medium">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 transition-colors duration-200 ${
                      viewMode === "list"
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <FiList className="text-sm" />
                    <span className="text-sm font-medium">List</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredUniversities?.length || 0} of{" "}
              {uniList?.length || 0} partner institutions
            </p>
          </div>

          {/* Universities Grid/List */}
          {filteredUniversities?.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {filteredUniversities?.map((item) => (
                <UniversityCard
                  key={item?.id}
                  item={item}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGraduationCap className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Institutions Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or location filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedLocation("");
                  }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-6 py-3 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300"
                >
                  <span>Clear Filters</span>
                  <FiFilter className="text-sm" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// University Card Component
const UniversityCard = ({ item, viewMode }) => {
  if (viewMode === "list") {
    return (
      <div className="group">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-white/20">
          <div className="flex items-center p-6">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl w-24 h-24 flex-shrink-0">
              <img
                src={item?.image || australia}
                alt={item?.name || "University"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="flex-1 ml-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                {item?.name}
              </h3>

              {item?.location && (
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FiMapPin className="text-primary text-sm" />
                  <span className="text-sm font-medium">{item?.location}</span>
                </div>
              )}

              <div className="flex items-center gap-4">
                <a
                  href={item?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-second transition-colors duration-300 group/link"
                >
                  <span>Visit Website</span>
                  <FiExternalLink className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="group">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={item?.image || australia}
            alt={item?.name || "University"}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* External Link Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiExternalLink className="text-primary text-sm" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {item?.name}
          </h3>

          {item?.location && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FiMapPin className="text-primary text-sm" />
              <span className="text-sm font-medium">{item?.location}</span>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href={item?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-second transition-colors duration-300 group/link"
            >
              <span>Visit Website</span>
              <FiExternalLink className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartenerInstitutions;
