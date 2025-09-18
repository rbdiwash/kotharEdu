import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import australia from "../../assets/images/australia.png";
import { FiChevronRight, FiCalendar, FiClock } from "react-icons/fi";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useKothar from "../../context/useKothar";

const News = () => {
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    nextArrow: (
      <BiChevronRight className="text-2xl text-primary hover:text-second transition-colors duration-300" />
    ),
    prevArrow: (
      <BiChevronLeft className="text-2xl text-primary hover:text-second transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const [{ news }, {}] = useKothar();

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

  const handleNewsClick = (item) => {
    window.scrollTo(0, 0);
    navigate(`news/${item?.id}`, { state: { data: item } });
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

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              News and Updates
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest news, announcements, and updates
              from Kothar Education. Discover insights, opportunities, and
              stories that matter to your educational journey.
            </p>
          </div>

          {/* News Slider */}
          {news?.length > 0 ? (
            <div className="relative">
              <Slider {...settings} className="news-slider">
                {news?.map((item, i) => (
                  <div key={i} className="px-3">
                    <NewsCard item={item} handleNewsClick={handleNewsClick} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
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

          {/* More News Button */}
          {news?.length > 0 && (
            <div className="text-center mt-12">
              <Link to="/explore/news" onClick={() => window.scrollTo(0, 0)}>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-4 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>View All News</span>
                  <FiChevronRight className="text-lg" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Custom CSS for Slider */}
      <style jsx>{`
        .news-slider .slick-dots {
          bottom: -40px;
        }
        .news-slider .slick-dots li button:before {
          color: #3b82f6;
          font-size: 12px;
        }
        .news-slider .slick-dots li.slick-active button:before {
          color: #1e40af;
        }
        .news-slider .slick-prev,
        .news-slider .slick-next {
          z-index: 10;
        }
      `}</style>
    </>
  );
};

// News Card Component
const NewsCard = ({ item, handleNewsClick }) => {
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
    <div className="group">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            loading="lazy"
            src={item?.image || australia}
            alt={item?.topic || "News Image"}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
            <FiCalendar className="text-primary text-sm" />
            <span className="text-sm font-medium text-gray-700">
              {format(new Date(item?.date || null), "MMM dd")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {item?.topic}
          </h3>

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

          {/* Action Button */}
          <div
            onClick={() => handleNewsClick(item)}
            className="flex items-center gap-2 text-primary font-semibold hover:text-second transition-colors duration-300 group/link cursor-pointer"
          >
            <span>Read More</span>
            <FiChevronRight className="text-lg group-hover/link:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
