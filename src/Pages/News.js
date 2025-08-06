import React from "react";
import australia from "../assets/images/australia.png";
import { FiChevronRight, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import useKothar from "../context/useKothar";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import TakePartEvent from "../Components/TakePartEvent";

const News = () => {
  const [{ news }] = useKothar();

  const isHTML = (text) => {
    const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
    return htmlRegex.test(text);
  };

  const purifyHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.innerHTML;
  };

  const extractPartOfParagraph = (html, maxLength) => {
    const purifiedHTML = purifyHTML(html);
    const tempElement = document.createElement("div");
    tempElement.innerHTML = purifiedHTML;
    const textContent = tempElement.textContent || tempElement.innerText;
    const extractedText = textContent.slice(0, maxLength);
    return textContent.length > maxLength
      ? `${extractedText}...`
      : extractedText;
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FiCalendar className="text-primary text-xl" />
              <span className="text-gray-600 font-medium">Latest Updates</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              News & Updates
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest news, updates, and insights from the
              world of international education.
            </p>
          </div>

          {/* News Grid */}
          {news?.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
              {news?.map((item, i) => (
                <div key={item?.id} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item?.image || australia}
                        alt={item?.topic || "News Image"}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                        <FiCalendar className="text-primary text-sm" />
                        <span className="text-sm font-medium text-gray-700">
                          {format(new Date(item?.date || null), "MMM dd")}
                        </span>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <Link to={`/news/${item?.id}`} state={{ data: item }}>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {item?.topic}
                        </h3>
                      </Link>

                      {/* Description */}
                      <div className="mb-4">
                        {isHTML(item?.description) ? (
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {extractPartOfParagraph(item?.description, 150)}
                          </p>
                        ) : (
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {item?.description?.slice(0, 150)}
                            {item?.description?.length > 150 && "..."}
                          </p>
                        )}
                      </div>

                      {/* Read More Link */}
                      <Link
                        to={`/news/${item?.id}`}
                        state={{ data: item }}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-second transition-colors duration-300 group/link"
                      >
                        <span>Read More</span>
                        <FiChevronRight className="text-lg group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCalendar className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No News Available
                </h3>
                <p className="text-gray-600">
                  Check back soon for the latest updates and news.
                </p>
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive the latest news and
                updates directly in your inbox.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-3 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105"
              >
                <span>Subscribe Now</span>
                <FiChevronRight className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TakePartEvent />
    </>
  );
};

export default News;
