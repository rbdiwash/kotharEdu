import { format } from "date-fns/esm";
import React, { useEffect } from "react";
import { BiChevronRight, BiCalendar, BiTime, BiUser } from "react-icons/bi";
import { FiShare2, FiBookmark, FiArrowLeft } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import TakePartEvent from "../Components/TakePartEvent";
import useKothar from "../context/useKothar";

const IndividualNews = () => {
  const { id } = useParams();
  const [{ news }] = useKothar();

  const newsData = news?.find((item) => item?.id === id);
  document.title = newsData?.topic
    ? `${newsData?.topic} - News - Kothar Education`
    : "News - Kothar Education";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!newsData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            News Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The news article you're looking for doesn't exist.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-6 py-3 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300"
          >
            <FiArrowLeft className="text-lg" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${newsData?.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-white/90 text-sm">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <BiChevronRight className="text-lg" />
              <Link
                to="/news"
                className="hover:text-white transition-colors duration-300"
              >
                News
              </Link>
              <BiChevronRight className="text-lg" />
              <span className="text-white font-semibold">Article</span>
            </div>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl">
            {/* Date and Category */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <BiCalendar className="text-white text-lg" />
                <span className="text-white font-medium">
                  {format(new Date(newsData?.date || null), "MMMM dd, yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <BiTime className="text-white text-lg" />
                <span className="text-white font-medium">5 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {newsData?.topic}
            </h1>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300">
                <FiShare2 className="text-lg" />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300">
                <FiBookmark className="text-lg" />
                <span>Bookmark</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  loading="lazy"
                  src={newsData?.image}
                  alt={newsData?.topic}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Article Body */}
              <div className="p-8 md:p-12">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiCalendar className="text-primary" />
                      <span className="text-sm font-medium">
                        {format(
                          new Date(newsData?.date || null),
                          "EEEE, MMMM dd, yyyy"
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiTime className="text-primary" />
                      <span className="text-sm font-medium">5 min read</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-300">
                      <FiShare2 className="text-lg" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: newsData?.description }}
                  />
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 text-sm">
                        Published by
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <BiUser className="text-white text-sm" />
                        </div>
                        <span className="font-semibold text-gray-800">
                          Kothar Education
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/explore/news"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-6 py-3 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105"
                    >
                      <FiArrowLeft className="text-lg" />
                      Back to News
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TakePartEvent />
    </>
  );
};

export default IndividualNews;
