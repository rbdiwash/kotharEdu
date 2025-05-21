import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaFile } from "react-icons/fa";
import {
  FiExternalLink,
  FiFileText,
  FiShield,
  FiCreditCard,
  FiUserCheck,
  FiCalendar,
  FiBookOpen,
  FiHelpCircle,
  FiSearch,
} from "react-icons/fi";

const ImportantLinks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const links = [
    {
      icon: <FaFile className="text-3xl" />,
      title: "Police Check",
      description: "Apply for National Police Certificate",
      url: "https://afpnationalpolicechecks.converga.com.au/agreement/timeout",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FiCreditCard className="text-3xl" />,
      title: "Photo ID",
      description: "Apply for NSW Photo Card",
      url: "https://www.service.nsw.gov.au/transaction/apply-for-a-nsw-photo-card",
      note: "Visit with 100 Points of ID (Passport + 2 more forms)",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FiUserCheck className="text-3xl" />,
      title: "Tax File Number (TFN)",
      description: "Apply for a Tax File Number",
      url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FiCalendar className="text-3xl" />,
      title: "FLU & COVID Vaccine",
      description: "Book your vaccinations",
      url: "https://www.hotdoc.com.au/",
      note: "Visit medical centre or Pharmacy for COVID, GP for FLU",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Working With Children Check",
      description: "Apply for WWCC",
      url: "https://www.service.nsw.gov.au/transaction/apply-for-a-working-with-children-check",
      note: "Visit service centre with required documents",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <FiBookOpen className="text-3xl" />,
      title: "RSA/RCG",
      description: "Responsible Service of Alcohol and Gambling",
      url: "https://www.onegov.nsw.gov.au/PublicRegister/#/publicregister/search/RTO",
      note: "Attend training from RTOs",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "White Card",
      description: "Construction Industry Safety Training",
      url: "https://www.onegov.nsw.gov.au/PublicRegister/#/publicregister/search/RTO",
      note: "Attend training from RTOs",
      color: "from-pink-500 to-pink-600",
      additionalLinks: [
        {
          title: "Licences4Work",
          url: "https://www.licences4work.com.au/",
        },
        {
          title: "Australia White Card",
          url: "https://australiawhitecard.com.au/",
        },
      ],
    },
    {
      icon: <FiCreditCard className="text-3xl" />,
      title: "NSW Driving Licence",
      description: "Apply for NSW Driver's Licence",
      url: "https://www.service.nsw.gov.au/transaction/book-a-driver-knowledge-test-dkt",
      note: "DKT → Learner's → Hazard → Driver's Test",
      color: "from-teal-500 to-teal-600",
      additionalLinks: [
        {
          title: "Book DKT Test",
          url: "https://www.service.nsw.gov.au/transaction/book-a-driver-knowledge-test-dkt",
        },
        {
          title: "Book Hazard Test",
          url: "https://www.service.nsw.gov.au/transaction/book-a-hazard-perception-test-hpt",
        },
        {
          title: "Book Driving Test",
          url: "https://www.service.nsw.gov.au/transaction/book-a-driver-or-rider-licence-test",
        },
      ],
    },
    {
      icon: <FiHelpCircle className="text-3xl" />,
      title: "NDIS Application",
      description: "Apply for National Disability Insurance Scheme",
      url: "https://ndis.gov.au/applying-access-ndis/how-apply",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const filteredLinks = links.filter(
    (link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-lightBlue via-blue-50 to-lightBlue opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-second/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center space-x-3 mb-6">
          <h1 className="font-semibold flex items-center">Home</h1>
          <BiChevronRight className="text-2xl" />
          <span className="text-primary font-semibold">Important Links</span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-second mb-4">
            Important Links
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Essential links and resources for various certificates and
            documentation
          </p>

          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search links..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 focus:border-second focus:ring-2 focus:ring-second/20 outline-none transition-all duration-300"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredLinks.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
              onMouseEnter={() => setHoveredCard(itemIndex)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transition-all duration-300`}
              ></div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`bg-gradient-to-r ${item.color} p-3 rounded-lg text-white transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>

                {item.isForm ? (
                  <div className="relative w-full overflow-hidden rounded-lg h-[400px]">
                    <iframe
                      src={item.url}
                      className="w-full h-full border-0"
                      title={item.title}
                    >
                      Loading…
                    </iframe>
                  </div>
                ) : (
                  <>
                    {item.note && (
                      <p className="text-gray-500 text-sm italic mb-4 bg-gray-50 p-3 rounded-lg">
                        Note: {item.note}
                      </p>
                    )}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-second hover:text-primary transition-colors duration-300 mb-4 group/link"
                    >
                      <span className="mr-2 group-hover/link:underline">
                        Visit Website
                      </span>
                      <FiExternalLink className="transform transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>

                    {item.additionalLinks && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">
                          Additional Resources:
                        </h5>
                        <div className="space-y-2">
                          {item.additionalLinks.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-second hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                            >
                              {link.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
