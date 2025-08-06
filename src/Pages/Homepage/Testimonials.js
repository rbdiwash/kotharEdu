import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const Testimonials = () => {
  const featurableWidgetId = "88a3156c-9f91-431c-86e2-1b75403b2d4b"; // You can use "example" for testing

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium border border-primary/20 mb-6">
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></span>
            </div>
            <span>Student Success Stories</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real testimonials from students who have achieved their study abroad
            dreams with our guidance.
          </p>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Google Reviews Section */}
        <div className=" rounded-3xl  border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Google Reviews
              </h3>
            </div>
          </div>

          <div className="relative">
            <ReactGoogleReviews
              layout="carousel"
              featurableId={featurableWidgetId}
              showDots={false}
            />
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                4.8★
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Average Rating
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Happy Students
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Success Rate
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                5-Star Reviews
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;

{
  /* <Slider {...settings}>
            {testimonial?.length > 0 ? (
              testimonial?.map((arg) => (
                <div className="relative" id={arg?.id}>
                  <div className="cont md:px-10 px-4 py-4 rounded-sm flex items-center flex-col  text-center bg-white text-white pb-20">
                    <RiDoubleQuotesL className="quote-icon text-7xl text-[#959595]" />

                    <p className="pb-4 text-xl text-black font-semibold ">
                      {arg?.tetimonial}
                    </p>
                    <IoChevronDownOutline className="down-icon text-5xl text-[#959595]" />
                  </div>
                  <div className="flex items-center flex-col  text-center mt-[-60px]">
                    <img
                      src={arg?.image || australia}
                      alt=""
                      className="rounded-full ring h-32 w-32 object-cover"
                    />
                    <h2 className="uppercase text-xl font-semibold mt-4">
                      {arg?.name}
                    </h2>
                    <p>
                      <i>Student</i>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="mt-2 text-center text-2xl">
                Oops ! No Result !!!
              </h1>
            )}
          </Slider> */
}
