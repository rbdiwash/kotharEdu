import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaCalculator,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaPercent,
  FaSparkles,
  FaHandSparkles,
} from "react-icons/fa";
import partners from "../assets/images/taxagent.jpg";

const TaxService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  //   const timer = setTimeout(() => setShowDiscount(true), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleGetStarted = () => {
    window.open("https://kothar.oneon.au/", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>
          Tax Returns 2024/2025 - Fast Refunds & Expert Help | Kothar Education
        </title>
        <meta
          name="description"
          content="Get your Australian tax return done fast with expert help from Kothar Education. Student discounts available, starting from $55. ATO-registered tax agents specializing in student & visa-based returns. Maximize your refund!"
        />
        <meta
          name="keywords"
          content="Australian tax return, tax refund Australia, student tax return, visa holder tax return, ATO tax agent, tax return 2024, tax return 2025, international student tax, TFN tax return, Australian tax services"
        />
        <meta name="author" content="Kothar Educational Services" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kotharedu.com/tax-service" />
        <meta
          property="og:title"
          content="Tax Returns 2024/2025 - Fast Refunds & Expert Help"
        />
        <meta
          property="og:description"
          content="Get your Australian tax return done fast with expert help. Student discounts available, starting from $55. ATO-registered tax agents specializing in student & visa-based returns."
        />
        <meta
          property="og:image"
          content="https://kotharedu.com/kothar_logo.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://kotharedu.com/tax-service"
        />
        <meta
          property="twitter:title"
          content="Tax Returns 2024/2025 - Fast Refunds & Expert Help"
        />
        <meta
          property="twitter:description"
          content="Get your Australian tax return done fast with expert help. Student discounts available, starting from $55. ATO-registered tax agents specializing in student & visa-based returns."
        />
        <meta
          property="twitter:image"
          content="https://kotharedu.com/kothar_logo.png"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kotharedu.com/tax-service" />

        {/* Structured Data for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Australian Tax Return Services",
            description:
              "Professional tax return services for international students and visa holders in Australia",
            image: "https://kotharedu.com/kothar_logo.png",
            provider: {
              "@type": "Organization",
              name: "Kothar Educational Services",
              url: "https://kotharedu.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suite 273, Level 2, 398/408 Pitt St",
                addressLocality: "Haymarket",
                addressRegion: "NSW",
                postalCode: "2000",
                addressCountry: "AU",
              },
              telephone: "+61480322403",
              email: "admin@kotharedu.com",
            },
            offers: {
              "@type": "Offer",
              price: "55",
              priceCurrency: "AUD",
              description: "Tax return services starting from $55",
            },
            serviceType: "Tax Return Preparation",
            areaServed: "Australia",
            audience: {
              "@type": "Audience",
              audienceType: "International Students and Visa Holders",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-second opacity-10 rounded-full "></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400 opacity-10 rounded-full animate-ping"></div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-second via-blue-500 to-altSecond text-white py-20 relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className={`transition-all duration-1000`}>
                <h1 className="text-4xl md:text-7xl font-bold mb-8 ">
                  🧾 TAX RETURNS 2024/2025
                </h1>
                <div className="text-2xl md:text-3xl font-semibold mb-10 space-y-3">
                  <div className="animate-bounce">⚡ Fast Refunds</div>
                  <div
                    className="animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    💼 Expert Help
                  </div>
                  <div
                    className="animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  >
                    💸 Affordable Price
                  </div>
                </div>
                <p className="text-xl md:text-2xl opacity-90 mb-10">
                  The financial year is wrapping up, and that means one thing —
                  it's tax time!
                </p>
                <button
                  onClick={handleGetStarted}
                  className="bg-white bg-gradient-to-r from-primary  to-orange-200 text-white md:py-6 py-3 md:px-12 px-6 rounded-full md:text-3xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-4 mx-auto  hover:animate-none animate-bounce font-bold"
                >
                  <FaHandSparkles className="text-2xl" />
                  Start Your Tax Return Now
                  <FaArrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Student Discount */}
            <div
              className={`bg-gradient-to-r from-second via-orange-400 to-orange-500 rounded-3xl shadow-2xl p-12 mb-16 text-white transform transition-all duration-1000`}
            >
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-3 ">
                🎓 SAVE MORE WITH KOTHAR!
              </h3>
              <p className="md:text-2xl text-lg mb-8">
                We support our clients every step on their journey. That's why
                we're offering an exclusive discount:
              </p>
              <div className="bg-white text-orange-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-bounce">
                <div className="md:text-6xl text-4xl font-bold mb-4 ">
                  ⭐ GET 10% DISCOUNT
                </div>
                <div className="text-2xl font-semibold mb-4">use the code:</div>
                <div className="text-lg">
                  <span className="font-bold md:text-4xl text-2xl">
                    "KOTHAR25"
                  </span>
                </div>
              </div>
            </div>
            {/* Do You Need to Lodge Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  👇 YOU NEED TO LODGE A TAX RETURN, IF:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <FaCheckCircle className="text-green-500 text-2xl mt-1 flex-shrink-0 " />
                    <span className="text-gray-700 text-lg">
                      You earned income in Australia
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <FaCheckCircle
                      className="text-green-500 text-2xl mt-1 flex-shrink-0 "
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span className="text-gray-700 text-lg">
                      You're on a temporary visa (student, 485, 408, etc.) or
                      permanent visa
                    </span>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <FaCheckCircle
                      className="text-green-500 text-2xl mt-1 flex-shrink-0 "
                      style={{ animationDelay: "0.4s" }}
                    />
                    <span className="text-gray-700 text-lg">
                      You had any tax withheld from your pay
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3 uppercase">
                  💡 Income Thresholds
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-100 to-green-200 border border-green-300 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <p className="text-green-800 font-bold text-lg">
                      If your total income is under $18,200, you may be entitled
                      to a full refund of any tax withheld!
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <p className="text-blue-800 font-bold text-lg">
                      If you have earned above $18,200, you must lodge a return
                      and may need to pay additional tax based on your income.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ATO Reference */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-200 border border-blue-300 rounded-3xl p-10 mb-16 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                📎 ATO Reference
              </h3>
              <p className="text-gray-700 text-xl mb-6">
                Minimum tax-free threshold for residents is $18,200
              </p>
              <a
                href="https://www.ato.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-second font-bold text-xl hover:underline flex items-center gap-3 bg-white px-6 py-3 rounded-full inline-block transform hover:scale-105 transition-all duration-300"
              >
                Click here to learn more on the ATO website →
              </a>
            </div>

            {/* Pricing Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100">
              <h3 className="md:text-4xl text-2xl font-bold text-gray-800 mb-8 text-center ">
                💰 PRICING STARTS FROM JUST $55!
              </h3>
              <p className="text-2xl text-center text-gray-600 mb-2">
                Transparent. Affordable. Fair.
              </p>
              <p className="text-base italic text-center text-gray-600 mb-12">
                <span className="font-bold">
                  * Note: Terms and conditions applies.
                </span>
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-110 transition-all duration-300 border border-gray-200">
                  <FaUsers className="text-5xl text-second mx-auto mb-6 " />
                  <h4 className="font-bold text-xl mb-3">
                    Your income bracket
                  </h4>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-110 transition-all duration-300 border border-gray-200">
                  <FaShieldAlt
                    className="text-5xl text-second mx-auto mb-6 "
                    style={{ animationDelay: "0.2s" }}
                  />
                  <h4 className="font-bold text-xl mb-3">Visa type</h4>
                  <p className="text-gray-600">
                    (Student, TR, PR, Citizen, etc.)
                  </p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-110 transition-all duration-300 border border-gray-200">
                  <FaCalculator
                    className="text-5xl text-second mx-auto mb-6 "
                    style={{ animationDelay: "0.4s" }}
                  />
                  <h4 className="font-bold text-xl mb-3">Complexity of work</h4>
                  <p className="text-gray-600">
                    (TFN, ABN, multiple jobs, crypto, etc.)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-green-200 border border-green-300 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <p className="text-green-800 font-bold text-2xl ">
                  🎯 We'll give you an exact quote before we start — no hidden
                  fees!
                </p>
              </div>
            </div>

            {/* Why Choose Kothar */}
            <div className="bg-gradient-to-r from-second via-blue-500 to-second rounded-3xl shadow-2xl p-12 mb-16 text-white">
              <h3 className="md:text-4xl text-2xl font-bold mb-12 text-center ">
                🛠️ WHY LODGE WITH KOTHAR?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle className="text-3xl mt-1 flex-shrink-0 " />
                  <span className="text-lg">ATO-registered tax agents</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle
                    className="text-3xl mt-1 flex-shrink-0 "
                    style={{ animationDelay: "0.1s" }}
                  />
                  <span className="text-lg">
                    Specialised in student & visa-based returns
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle
                    className="text-3xl mt-1 flex-shrink-0 "
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span className="text-lg">
                    Fast, friendly & confidential service
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle
                    className="text-3xl mt-1 flex-shrink-0 "
                    style={{ animationDelay: "0.3s" }}
                  />
                  <span className="text-lg">
                    Maximise your refund, or minimise tax payable
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                  <FaCheckCircle
                    className="text-3xl mt-1 flex-shrink-0 "
                    style={{ animationDelay: "0.4s" }}
                  />
                  <span className="text-lg">
                    100% Online or In-Person options available
                  </span>
                </div>
              </div>
            </div>

            {/* Our Partners */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center ">
                🤝 Our Registered Tax Agent Partner
              </h3>
              <img src={partners} alt="Our Partners" />
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center ">
                📞 Get in Touch
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <FaPhone className="text-4xl text-second mx-auto mb-4 " />
                  <p className="font-bold text-lg mb-2">Phone</p>
                  <p className="text-gray-600 text-lg">0480322403</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <FaEnvelope
                    className="text-4xl text-second mx-auto mb-4 "
                    style={{ animationDelay: "0.2s" }}
                  />
                  <p className="font-bold text-lg mb-2">Email</p>
                  <p className="text-gray-600 text-lg">admin@kotharedu.com</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <FaMapMarkerAlt
                    className="text-4xl text-second mx-auto mb-4 "
                    style={{ animationDelay: "0.4s" }}
                  />
                  <p className="font-bold text-lg mb-2">Address</p>
                  <p className="text-gray-600 text-lg">
                    Suite 273, Level 2, 398/408 Pitt St, Haymarket NSW 2000
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <button
                onClick={handleGetStarted}
                className="bg-white bg-gradient-to-r from-primary  to-orange-200 text-white md:py-6 py-3 md:px-12 px-6 rounded-full md:text-3xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-4 mx-auto  hover:animate-none animate-bounce font-bold"
              >
                <FaCalculator className="md:text-4xl text-2xl" />
                Start Your Tax Return Now
                <FaArrowRight className="md:text-3xl text-2xl" />
              </button>
              <p className="text-gray-600 mt-6 text-lg">
                Redirects to our secure tax services platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxService;
