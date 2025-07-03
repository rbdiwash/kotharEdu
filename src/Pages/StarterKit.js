import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBan,
  FaBus,
  FaCheckCircle,
  FaCreditCard,
  FaEnvelope,
  FaExclamationTriangle,
  FaFileAlt,
  FaGift,
  FaHandshakeSlash,
  FaHandSparkles,
  FaHeart,
  FaHeartbeat,
  FaIdCard,
  FaMapMarkerAlt,
  FaMobile,
  FaMoneyBillWave,
  FaPassport,
  FaPhone,
  FaPlane,
  FaShirt,
  FaSuitcase,
  FaTshirt,
  FaUniversity,
  FaTimes,
  FaEye,
} from "react-icons/fa";
import adapter from "../assets/images/adapter.png";
import declaration from "../assets/images/declaration.png";

const StarterKit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showAdapterModal, setShowAdapterModal] = useState(false);
  const [showDeclarationModal, setShowDeclarationModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setShowDiscount(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    window.open(
      "https://docs.google.com/document/d/1eFvDqPi0J7cDTewyjgQiJsN0oEpbXZzF8wtMa9kQ6LU/edit?tab=t.0",
      "_blank"
    );
  };

  const handleContact = () => {
    window.open("tel:0480322403", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@kotharedu.com", "_blank");
  };

  const downloadImage = () => {
    window.open(declaration, "_blank");
  };

  const openAdapterModal = () => setShowAdapterModal(true);
  const closeAdapterModal = () => setShowAdapterModal(false);
  const openDeclarationModal = () => setShowDeclarationModal(true);
  const closeDeclarationModal = () => setShowDeclarationModal(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-second opacity-10 rounded-full "></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary opacity-10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400 opacity-10 rounded-full "></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-altSecond opacity-10 rounded-full "></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-second via-blue-500 to-altSecond text-white py-20 relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 ">
                🎓 WELCOME TO AUSTRALIA!
              </h1>
              <div className="text-2xl md:text-3xl font-semibold mb-10 space-y-3">
                <div className="">🥳 Your Digital Starter Kit</div>
                <div className="" style={{ animationDelay: "0.2s" }}>
                  👏 Congratulations on your visa! You are a Aussie mate now!
                </div>
                <div className="" style={{ animationDelay: "0.4s" }}>
                  🚀 Smooth transition guaranteed
                </div>
              </div>
              <p className="text-xl md:text-2xl opacity-90 mb-10">
                Complete guide for pre-arrival and post-arrival essentials
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-white bg-gradient-to-r from-primary to-orange-200 text-white md:py-6 py-3 md:px-12 px-6 rounded-full md:text-3xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-4 mx-auto hover:animate-none  font-bold"
              >
                <FaHandSparkles className="text-2xl" />
                Download Your Starter Kit
                <FaArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-second via-orange-400 to-orange-500 rounded-3xl shadow-2xl p-12 mb-16 text-white transform transition-all duration-1000">
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-3 ">
              🎉 CONGRATULATIONS ON YOUR VISA!
            </h3>
            <p className="md:text-2xl text-lg mb-8">
              This starter kit is designed to guide you through the essential
              steps before and after your arrival, ensuring a smooth transition
              to your new life in Australia.
            </p>
            <div className="bg-white text-orange-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 ">
              <div className="md:text-4xl text-2xl font-bold mb-4">
                🥳 COMPLETE GUIDE
              </div>
              <div className="text-2xl font-semibold mb-4">
                Pre-arrival & Post-arrival essentials
              </div>
            </div>
          </div>

          {/* Pre-Arrival Checklist */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100">
            <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center ">
              📋 PRE-ARRIVAL CHECKLIST
            </h3>

            {/* 1. Booking Your Flights */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaPlane className="text-blue-500 text-3xl" />
                  1. Booking Your Flights
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>When to Book:</strong> Book well in advance after
                      receiving your visa grant for better deals
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Airlines:</strong> Research different airlines for
                      student discounts and flexible booking options
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Connecting Flights:</strong> Ensure sufficient
                      layover time, especially for self-transfer flights
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Meal Selection:</strong> Select preferred meals
                      when booking or through airline website/app
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Travel Insurance:</strong> Purchase comprehensive
                      travel insurance covering flight, luggage, and health
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500 rounded-xl">
                  <h5 className="font-bold text-lg mb-2">
                    🎯 Our Flight Partner:
                  </h5>
                  <p className="text-lg">
                    Everest Tours and Travels: +61 439 537 342 (Taiyab)
                  </p>
                  <p className="text-sm opacity-90">
                    Very reasonable prices for flight fares
                  </p>
                </div>
              </div>
            </div>

            {/* 2. What to Pack */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaSuitcase className="text-green-500 text-3xl" />
                  2. What to Pack
                </h4>
                <p className="text-gray-700 mb-6">
                  Australia has strict customs regulations. Here's what you can
                  and cannot bring:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                      <FaPassport className="text-blue-500" />
                      Essential Documents
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Passport and visa grant letter
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Offer of enrolment and CoE
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Academic transcripts and qualifications
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Driver's license (if applicable)
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Photocopies of all important documents
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />A proper
                        Resume to apply for jobs
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                      <FaTshirt className="text-purple-500" />
                      Clothing & Essentials
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Clothing suitable for Australian climate
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Enough clothes for a few months
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-500" />
                        Adaptors for Australian power outlets (Type I)
                        <button
                          onClick={openAdapterModal}
                          className="ml-2 bg-white text-black px-2 py-1 rounded text-xs hover:bg-blue-600 transition-all duration-300 flex items-center gap-1"
                        >
                          View Adapter
                        </button>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Medications with doctor's letter
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <h6 className="font-bold text-black mb-2 flex items-center gap-2">
                      <FaGift className="text-black" />
                      Optional Items
                    </h6>
                    <ul className="text-black-700 text-sm space-y-1">
                      <li>• 1 set of utensils (pan, pressure cooker, etc)</li>
                      <li>• Linen set for bed (single/queen size)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h6 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                      <FaBan className="text-red-600" />
                      Prohibited Items
                    </h6>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Fresh fruit, vegetables, meat, dairy</li>
                      <li>• Plant material and seeds</li>
                      <li>• Animal products</li>
                      <li>• Hazardous materials</li>
                      <li>• Illegal drugs and weapons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Funds to Bring */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaMoneyBillWave className="text-purple-500 text-3xl" />
                  3. Funds to Bring
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="font-bold text-yellow-800">
                      💰 Minimum recommended: 1500 AUD per person for students
                      to sustain a few weeks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaExclamationTriangle className="text-orange-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Declaration Required:</strong> If carrying
                      A$10,000 or more, you must declare at customs, but usually
                      not necessary.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Initial Expenses:</strong> Have enough funds to
                      cover your initial expenses, such as accommodation,
                      transportation from the airport, and groceries for the
                      first few weeks.
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="font-bold text-lg text-gray-800 mb-4">
                    Fund Cashing Methods: You can use the following methods to
                    bring your funds to Australia:
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <FaCreditCard className="text-blue-500 text-3xl mx-auto mb-2" />
                      <p className="font-semibold">Travel Cards</p>
                      <p className="text-sm text-gray-600">
                        Pre-loaded secure cards
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <FaIdCard className="text-green-500 text-3xl mx-auto mb-2" />
                      <p className="font-semibold">Credit/Debit Cards</p>
                      <p className="text-sm text-gray-600">
                        Accepted everywhere
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <FaMoneyBillWave className="text-green-500 text-3xl mx-auto mb-2" />
                      <p className="font-semibold">Cash</p>
                      <p className="text-sm text-gray-600">
                        Australian dollars for immediate expenses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Declaration Form */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaFileAlt className="text-orange-500 text-3xl" />
                4. Declaration Form
              </h4>
              <p className="text-gray-700 mb-6">
                Upon arrival, you must complete an Incoming Passenger Card
                (IPC). This is a legal document where you must declare certain
                goods.
              </p>

              <div className="mb-6 text-center">
                <button
                  onClick={openDeclarationModal}
                  className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
                >
                  <FaEye className="text-lg" />
                  View Sample Declaration Form
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-lg text-gray-800 mb-4">
                    What to Declare:
                  </h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-orange-500" />
                      Any food items (cooked, uncooked, processed)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-orange-500" />
                      Plant material (seeds, nuts, fresh fruit)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-orange-500" />
                      Animal products (meat, dairy, eggs, honey)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-orange-500" />
                      Wooden articles or natural materials
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-orange-500" />
                      Currency of A$10,000 or more
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-orange-500" />
                      Medicines (prescription or otherwise)
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-lg text-gray-800 mb-4">
                    Important Notes:
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-red-800 text-sm">
                        <strong>Why Declare:</strong> Australia has strict
                        biosecurity laws. Failing to declare can lead to
                        penalties, fines, visa cancellation, or imprisonment.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Process:</strong> IPC provided on plane or at
                        airport. Fill accurately and honestly. When unsure,
                        always declare.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post-Arrival Essentials */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100">
            <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center ">
              🏠 POST-ARRIVAL ESSENTIALS
            </h3>

            {/* 1. Getting a SIM Card */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaMobile className="text-blue-500 text-3xl" />
                  1. Getting a SIM Card
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Major Providers:</strong> Optus, Telstra,
                      Vodafone, Amaysim, Lycamobile
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Prepaid vs Postpaid:</strong> Prepaid offers
                      flexibility, postpaid requires contract and credit check
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Where to Buy:</strong> Airport kiosks, provider
                      stores, or supermarkets
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500  rounded-xl">
                  <p className="font-bold text-lg">
                    💡 Tip: Start with a cheaper option for a few months to
                    understand your usage and coverage needs
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Opening a Bank Account */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaCreditCard className="text-green-500 text-3xl" />
                  2. Opening a Bank Account
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Major Banks:</strong> Commonwealth Bank, Westpac,
                      NAB, ANZ
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Documents Needed:</strong> Passport, visa grant
                      letter, proof of address, student ID
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Online Application:</strong> Some banks allow
                      online application before arrival
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Applying for TFN */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaIdCard className="text-purple-500 text-3xl" />
                  3. Applying for a Tax File Number (TFN)
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>What it is:</strong> A unique nine-digit number
                      issued by the Australian Taxation Office (ATO)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>When to Apply:</strong> After arrival in Australia
                      with a valid work visa
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Information Needed:</strong> Passport details and
                      Australian address
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-500 text-white rounded-xl">
                  <a
                    href="https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-bold"
                  >
                    🌐 Apply Online: ATO TFN Application
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Public Transport */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaBus className="text-orange-500 text-3xl" />
                  4. Public Transport
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Smart Cards:</strong> Opal Card (NSW), Myki (VIC),
                      Go Card (QLD)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Where to Buy:</strong> Available in shops near
                      stations
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <strong>Concession Fares:</strong> Students may be
                      eligible for concession fares
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-500 text-white rounded-xl">
                  <p className="font-bold text-lg">
                    💰 Tip: Take cash with you to avoid surcharges when buying
                    transport cards 😅
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Health and Well-being */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaHeartbeat className="text-red-500 text-3xl" />
                5. Health and Well-being
              </h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <strong>OSHC:</strong> Overseas Student Health Cover is
                    mandatory for international students <br />
                    <span className="text-black-500 font-bold italic bg-orange-300">
                      If you are unsure about your OSHC, contact Kothar
                      Education Services. Email: info@kotharedu.com
                    </span>
                  </div>
                  <div></div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <strong>University Support:</strong> Your university offers
                    academic, welfare, and health services.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <strong>Don't Hesitate:</strong> Reach out to university
                    support services when needed.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-3xl p-10 mb-16 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center ">
              🎯 FINAL MESSAGE
            </h3>
            <div className="text-center space-y-6">
              <p className="text-xl text-gray-700">
                We hope this starter kit helps you prepare for your exciting
                journey to Australia! Should you have any questions, remember to
                consult us.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-yellow-800 font-bold text-lg">
                  💪 Keep patience and keep working hard, as the journey will be
                  full of roller coasters in Australia. Keep your head high,
                  cheers mate! 🍻
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r bg-second text-white rounded-3xl shadow-2xl p-12 mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center ">
              📞 KOTHAR EDUCATIONAL SERVICES
            </h3>
            <p className="text-xl text-center mb-10 opacity-90">
              Get in touch with us for any questions about your journey to
              Australia
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <FaPhone className="text-3xl mx-auto mb-4 " />
                <h4 className="font-bold text-lg mb-2">Call Us</h4>
                <p
                  className="opacity-90"
                  onClick={handleContact}
                  style={{ cursor: "pointer" }}
                >
                  0480322403
                </p>
              </div>
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <FaEnvelope className="text-3xl mx-auto mb-4 " />
                <h4 className="font-bold text-lg mb-2">Email Us</h4>
                <p
                  className="opacity-90"
                  onClick={handleEmail}
                  style={{ cursor: "pointer" }}
                >
                  info@kotharedu.com
                </p>
              </div>
              <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <FaMapMarkerAlt className="text-3xl mx-auto mb-4 " />
                <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                <p className="opacity-90">
                  Suite 273, Level 2, 398/408 Pitt St, Haymarket NSW 2000
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleContact}
                className="bg-white text-second md:py-4 py-3 md:px-10 px-8 rounded-full md:text-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-4 mx-auto font-bold "
              >
                <FaHandSparkles className="text-2xl" />
                Contact Us Now
                <FaArrowRight className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Important Contacts */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center ">
              🚨 IMPORTANT CONTACTS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-lg text-red-800 mb-3 flex items-center gap-3">
                    <FaExclamationTriangle className="text-red-500" />
                    Emergency Services
                  </h4>
                  <p className="text-red-700">
                    <strong>Police, Fire, Ambulance:</strong> 000
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-lg text-blue-800 mb-3 flex items-center gap-3">
                    <FaUniversity className="text-blue-500" />
                    University Support
                  </h4>
                  <p className="text-blue-700">
                    Contact your university's international student support
                    services for academic, welfare, and health assistance.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-lg text-green-800 mb-3 flex items-center gap-3">
                    <FaHandshakeSlash className="text-green-500" />
                    Kothar Support
                  </h4>
                  <p className="text-green-700">
                    We're here to help you throughout your journey. Don't
                    hesitate to reach out for any questions or concerns.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold text-lg text-purple-800 mb-3 flex items-center gap-3">
                    <FaHeart className="text-purple-500" />
                    Best Wishes
                  </h4>
                  <p className="text-purple-700 font-bold">
                    We wish you all the best for your studies and life in
                    Australia! 🇦🇺
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adapter Modal */}
      {showAdapterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">
                  🔌 Australian Power Adapter (Type I)
                </h3>{" "}
                <div className="text-center">
                  <button
                    onClick={closeAdapterModal}
                    className="bg-blue-500 text-black px-6 py-3 rounded-full hover:bg-blue-600 text-2xl transition-all duration-300 cursor-pointer"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center mb-6">
                <img src={adapter} alt="Adapter" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Declaration Form Modal */}
      {showDeclarationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  📋 Incoming Passenger Card (IPC) - Declaration Form
                </h3>
                <button
                  onClick={closeDeclarationModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-gray-100 rounded-2xl mb-4">
                  <img
                    src={declaration}
                    alt="Declaration Form"
                    className="w-full h-auto cursor-pointer"
                    onClick={downloadImage}
                  />

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
                    <h6 className="font-bold text-red-800 mb-2">
                      ⚠️ IMPORTANT REMINDER:
                    </h6>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Fill out the card accurately and honestly</li>
                      <li>• When unsure about an item, always declare it</li>
                      <li>• Failing to declare can lead to penalties</li>
                      <li>
                        • You can dispose of undeclared items in amnesty bins
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarterKit;
