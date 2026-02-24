import React from "react";
import australia from "../../assets/images/australia.png";
import { FiChevronRight, FiCalendar } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useKothar from "../../context/useKothar";

const isHTML = (text) => {
  if (!text || typeof text !== "string") return false;
  const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
  return htmlRegex.test(text);
};

const purifyHTML = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.innerHTML;
};

const extractText = (html, maxLength) => {
  if (!html) return "";
  const purified = purifyHTML(html);
  const el = document.createElement("div");
  el.innerHTML = purified;
  const text = el.textContent || el.innerText || "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
};

const News = () => {
  const navigate = useNavigate();
  const [{ news }] = useKothar();
  const list = news?.length > 0 ? news : [];

  const handleNewsClick = (item) => {
    window.scrollTo(0, 0);
    navigate(`news/${item?.id}`, { state: { data: item } });
  };

  const featured = list[0];
  const rest = list.slice(1);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-0 md:px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <FiCalendar className="text-primary text-xl" />
            <span className="text-gray-600 font-medium">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            News and Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay informed with the latest news, announcements, and updates from
            Kothar Education. Discover insights, opportunities, and stories that
            matter to your educational journey.
          </p>
        </div>

        {list.length > 0 ? (
          <>
            <div className="space-y-12">
              {/* Featured article (first) */}
              {featured && (
                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNewsClick(featured)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleNewsClick(featured)
                  }
                  className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden">
                      <img
                        loading="lazy"
                        src={featured?.image || australia}
                        alt={featured?.topic || "Featured news"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 bg-white/95 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium">
                          <FiCalendar className="text-primary" />
                          {format(
                            new Date(featured?.date || null),
                            "MMMM d, yyyy",
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8">
                      <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                        Featured
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-3">
                        {featured?.topic}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {isHTML(featured?.description)
                          ? extractText(featured.description, 180)
                          : (featured?.description || "").slice(0, 180) +
                            (featured?.description?.length > 180 ? "…" : "")}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold">
                        Read article
                        <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* More articles grid */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.slice(0, 6).map((item) => (
                    <NewsTile
                      key={item?.id}
                      item={item}
                      onSelect={handleNewsClick}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/explore/news"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-4 rounded-xl font-semibold hover:from-second hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View all news
                <FiChevronRight className="text-lg" />
              </Link>
            </div>
          </>
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
      </div>
    </section>
  );
};

const NewsTile = ({ item, onSelect }) => (
  <article
    role="button"
    tabIndex={0}
    onClick={() => onSelect(item)}
    onKeyDown={(e) => e.key === "Enter" && onSelect(item)}
    className="group flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        loading="lazy"
        src={item?.image || australia}
        alt={item?.topic || "News"}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
      />
      <div className="absolute top-3 left-3">
        <span className="inline-flex items-center gap-1.5 bg-white/95 text-gray-700 rounded-lg px-2.5 py-1 text-xs font-medium">
          <FiCalendar className="text-primary" />
          {format(new Date(item?.date || null), "MMM d")}
        </span>
      </div>
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 text-lg">
        {item?.topic}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2 mt-1 flex-1">
        {isHTML(item?.description)
          ? extractText(item.description, 100)
          : (item?.description || "").slice(0, 100) +
            (item?.description?.length > 100 ? "…" : "")}
      </p>
      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3">
        Read more
        <FiChevronRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
      </span>
    </div>
  </article>
);

export default News;
