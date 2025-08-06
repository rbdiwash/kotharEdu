import React from "react";
import { FiBook, FiUsers, FiAward } from "react-icons/fi";

const Classes = () => {
  const classes = [
    {
      title: "PTE",
      description: "Pearson Test of English",
      icon: <FiBook className="text-4xl" />,
      features: [
        "Computer-based test",
        "Fast results",
        "Accepted worldwide",
        "Flexible scheduling",
      ],
    },
    {
      title: "IELTS",
      description: "International English Language Testing System",
      icon: <FiUsers className="text-4xl" />,
      features: [
        "Academic & General Training",
        "Recognized globally",
        "Comprehensive assessment",
        "Regular test dates",
      ],
    },
    {
      title: "RPL",
      description: "Recognition of Prior Learning",
      icon: <FiAward className="text-4xl" />,
      features: [
        "Skills assessment",
        "Career advancement",
        "Qualification recognition",
        "Professional development",
      ],
    },
  ];

  return (
    <section
      id="classes"
      className="relative py-24 bg-gradient-to-b from-second to-lightBlue"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Test Preparation Classes
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We have experienced teachers who can guide you prepare for entrance
            tests and help you achieve your academic goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-second/10 rounded-lg p-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-second">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">{item.description}</p>

                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-second rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact">
                  <button className="mt-8 w-full bg-second text-white py-3 px-6 rounded-lg hover:bg-primary transition-colors duration-300">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
