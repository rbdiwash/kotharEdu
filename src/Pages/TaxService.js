import React from "react";
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
} from "react-icons/fa";

const TaxService = () => {
  const handleGetStarted = () => {
    window.open("https://kothar.oneon.au/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-second to-second text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🧾 TAX RETURNS 2024/2025
            </h1>
            <div className="text-xl md:text-2xl font-semibold mb-8 space-y-2">
              <div>⚡ Fast Refunds</div>
              <div>💼 Expert Help</div>
              <div>💸 Affordable Price</div>
            </div>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              The financial year is wrapping up, and that means one thing — it's
              tax time!
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-white text-primary font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
            >
              Start Your Tax Return Now
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Deadline Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-8 border-red-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              📅 Important Deadline
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              If you're living in Australia — whether you're a student,
              graduate, or permanent resident — the Australian Taxation Office
              (ATO) requires you to lodge your tax return between:
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                1 July 2025 to 31 October 2025
              </div>
              <p className="text-gray-600">
                Don't stress — Kothar Educational Services is here to make it
                easy, stress-free, and budget-friendly for you.
              </p>
            </div>
          </div>

          {/* Do You Need to Lodge Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                👇 Do YOU Need to Lodge a Tax Return?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    You earned income in Australia
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    You're on a temporary visa (student, 485, 408, etc.) or
                    permanent visa
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    You had any tax withheld from your pay
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                💡 Income Thresholds
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold">
                    If your total income is under $18,200, you may be entitled
                    to a full refund of any tax withheld!
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    If you earned above $18,200, you must lodge a return and may
                    need to pay additional tax based on your income.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ATO Reference */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              📎 ATO Reference
            </h3>
            <p className="text-gray-700 mb-4">
              Minimum tax-free threshold for residents is $18,200
            </p>
            <a
              href="https://www.ato.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline flex items-center gap-2"
            >
              Click here to learn more on the ATO website →
            </a>
          </div>

          {/* Student Discount */}
          <div className="bg-gradient-to-r from-second to-orange-500 rounded-2xl shadow-xl p-8 mb-12 text-white">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              🎓 STUDENTS SAVE MORE!
            </h3>
            <p className="text-xl mb-6">
              We support our student community every step of the way. That's why
              we're offering an exclusive:
            </p>
            <div className="bg-white text-orange-600 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">⭐ 10% DISCOUNT</div>
              <div className="text-lg">for all students</div>
              <div className="text-sm mt-2">
                Just show your valid Student Visa at the time of booking.
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              💰 PRICING STARTS FROM JUST $55!
            </h3>
            <p className="text-xl text-center text-gray-600 mb-8">
              Transparent. Affordable. Fair.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaUsers className="text-4xl text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Your income bracket</h4>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaShieldAlt className="text-4xl text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Visa type</h4>
                <p className="text-gray-600">(student, 485, PR, etc.)</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaCalculator className="text-4xl text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Complexity of work</h4>
                <p className="text-gray-600">(TFN, ABN, multiple jobs)</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-800 font-semibold text-lg">
                🎯 We'll give you an exact quote before we start — no hidden
                fees!
              </p>
            </div>
          </div>

          {/* Why Choose Kothar */}
          <div className="bg-gradient-to-r from-primary to-primary2 rounded-2xl shadow-xl p-8 mb-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">
              🛠️ WHY LODGE WITH KOTHAR?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <span>ATO-registered tax agents</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <span>Specialised in student & visa-based returns</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <span>Fast, friendly & confidential service</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <span>Maximise your refund, or minimise tax payable</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <span>100% Online or In-Person options available</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📞 Get in Touch
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <FaPhone className="text-3xl text-primary mx-auto mb-3" />
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">0480322403</p>
              </div>
              <div className="text-center">
                <FaEnvelope className="text-3xl text-primary mx-auto mb-3" />
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">admin@kotharedu.com</p>
              </div>
              <div className="text-center">
                <FaMapMarkerAlt className="text-3xl text-primary mx-auto mb-3" />
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">
                  272A/398 Pitt St, Sydney NSW 2000
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-primary to-primary2 text-white font-bold py-6 px-12 rounded-full text-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-4 mx-auto"
            >
              <FaCalculator className="text-3xl" />
              Start Your Tax Return Now
              <FaArrowRight className="text-2xl" />
            </button>
            <p className="text-gray-600 mt-4">
              Redirects to our secure tax services platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxService;
