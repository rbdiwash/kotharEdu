import React from "react";
import { Link } from "react-router-dom";
import useKothar from "../../context/useKothar";
import OptimizedImage from "../../Components/OptimizedImage";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const HOMEPAGE_STORIES_COUNT = 2;

const OurSuccessStories = () => {
  const [{ testimonial }] = useKothar();
  const stories = testimonial?.slice(0, HOMEPAGE_STORIES_COUNT) ?? [];

  return (
    <section
      id="success-stories"
      className="py-24 bg-gradient-to-b from-lightBlue to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
            Real outcomes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their study abroad goals with Kothar
            Educational Services.
          </p>
        </div>

        {stories.length > 0 ? (
          <>
            <div className="space-y-16 md:space-y-24">
              {stories.map((item, index) => (
                <div
                  key={item?.id}
                  className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-12 max-w-5xl mx-auto ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="relative w-full md:w-2/5 flex-shrink-0 aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src={item?.image}
                      alt={item?.name || "Student"}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                      fetchPriority={index < 2 ? "high" : "auto"}
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-primary text-4xl opacity-40">
                      <FaQuoteLeft aria-hidden />
                    </span>
                    <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4 mb-6 italic">
                      &ldquo;{item?.tetimonial || item?.testimonial || "—"}&rdquo;
                    </blockquote>
                    <p className="font-bold text-gray-800 text-lg">
                      {item?.name || "Student"}
                    </p>
                    <p className="text-sm text-gray-500">Success story</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link
                to="/explore/success-stories"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-8 py-4 rounded-xl font-semibold hover:from-second hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View all success stories
                <FiChevronRight className="text-lg" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16 rounded-2xl bg-white/80 border border-gray-100 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaQuoteLeft className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No stories yet
            </h3>
            <p className="text-gray-600 text-sm">
              Success stories from our students will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurSuccessStories;
