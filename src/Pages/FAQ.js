import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";
import {
  FaGraduationCap,
  FaPlane,
  FaHome,
  FaMoneyBillWave,
  FaUserGraduate,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  document.title = "FAQ - Kothar Education";
  
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "Student Visa",
      icon: <FaPlane className="text-primary text-xl" />,
      questions: [
        {
          question: "What are the requirements for an Australian student visa?",
          answer:
            "To apply for an Australian student visa (Subclass 500), you need: a Confirmation of Enrolment (CoE) from an Australian institution, proof of sufficient funds, English language proficiency (IELTS/TOEFL), health insurance (OSHC), and a genuine temporary entrant statement. You must also meet health and character requirements.",
        },
        {
          question: "How long does it take to process a student visa?",
          answer:
            "Student visa processing times vary but typically take 4-8 weeks. Factors affecting processing time include: completeness of application, country of origin, peak application periods, and whether you need additional health checks. We recommend applying at least 3 months before your course starts.",
        },
        {
          question: "Can I work while studying in Australia?",
          answer:
            "Yes, student visa holders can work up to 40 hours per fortnight during term time and unlimited hours during holidays. However, work should not interfere with your studies. You must maintain satisfactory course progress and attendance.",
        },
        {
          question: "What is the Genuine Temporary Entrant (GTE) requirement?",
          answer:
            "The GTE requirement assesses whether you genuinely intend to stay in Australia temporarily for study purposes. You must provide a personal statement explaining your study goals, career plans, and reasons for choosing Australia. This helps demonstrate you're not using the student visa as a pathway to permanent residency.",
        },
      ],
    },
    {
      category: "Education & Courses",
      icon: <FaGraduationCap className="text-primary text-xl" />,
      questions: [
        {
          question:
            "What are the different types of courses available in Australia?",
          answer:
            "Australia offers various course types: English Language Courses (ELICOS), Vocational Education and Training (VET), Undergraduate degrees (Bachelor's), Postgraduate degrees (Master's/PhD), and Foundation/Pathway programs. Each has different entry requirements and duration.",
        },
        {
          question: "How do I choose the right course and institution?",
          answer:
            "Consider factors like: course content and career outcomes, institution reputation and rankings, location and lifestyle, tuition fees and living costs, entry requirements, and post-study work opportunities. Research thoroughly and consult with education agents for guidance.",
        },
        {
          question:
            "What are the academic requirements for Australian universities?",
          answer:
            "Requirements vary by institution and course level. Generally: Undergraduate requires Year 12 completion or equivalent, Postgraduate requires Bachelor's degree, English proficiency (IELTS 6.0-7.0 typically), and some courses may require specific prerequisites or work experience.",
        },
        {
          question: "Can I transfer between courses or institutions?",
          answer:
            "Yes, you can transfer, but you must: notify your current institution, ensure your new course meets visa requirements, update your CoE, and maintain visa compliance. Some institutions have restrictions on transfers within the first 6 months of study.",
        },
      ],
    },
    {
      category: "Living in Australia",
      icon: <FaHome className="text-primary text-xl" />,
      questions: [
        {
          question:
            "What are the accommodation options for international students?",
          answer:
            "Options include: on-campus accommodation (halls of residence), off-campus shared apartments, homestay with Australian families, private rentals, and student housing providers. Costs vary by city and type, typically $150-400 per week. Start searching early as demand is high.",
        },
        {
          question: "How much does it cost to live in Australia as a student?",
          answer:
            "Living costs vary by city: Sydney/Melbourne: $20,000-30,000/year, Other cities: $15,000-25,000/year. This includes accommodation, food, transport, utilities, and entertainment. You must show proof of funds for living expenses when applying for your visa.",
        },
        {
          question:
            "What healthcare options are available for international students?",
          answer:
            "All international students must have Overseas Student Health Cover (OSHC) for their entire stay. OSHC covers basic medical services, hospital treatment, and some prescription medicines. You can purchase additional private health insurance for extra coverage.",
        },
        {
          question: "How do I open a bank account in Australia?",
          answer:
            "You can open an account before arriving or after. You'll need: passport, student visa, CoE, and proof of address. Major banks include Commonwealth, ANZ, Westpac, and NAB. Many offer special student accounts with no monthly fees.",
        },
      ],
    },
    {
      category: "Financial & Costs",
      icon: <FaMoneyBillWave className="text-primary text-xl" />,
      questions: [
        {
          question: "What are the tuition fees for international students?",
          answer:
            "Tuition fees vary significantly: Undergraduate: $20,000-45,000/year, Postgraduate: $22,000-50,000/year, VET courses: $8,000-22,000/year, English courses: $300-400/week. Fees depend on institution, course level, and field of study.",
        },
        {
          question:
            "Are there scholarships available for international students?",
          answer:
            "Yes, various scholarships are available: Australia Awards, university-specific scholarships, government scholarships, and private organization scholarships. Requirements vary but often include academic excellence, leadership potential, and financial need. Apply early as competition is high.",
        },
        {
          question: "Can I work to support my studies financially?",
          answer:
            "Yes, you can work up to 40 hours per fortnight during term time. Typical student jobs include: retail, hospitality, tutoring, and casual office work. Average pay is $20-30/hour. However, don't rely solely on work income as it may not cover all expenses.",
        },
        {
          question: "What are the additional costs I should budget for?",
          answer:
            "Additional costs include: textbooks ($500-1,000/year), transport ($30-50/week), utilities ($20-40/week), internet/phone ($50-80/month), entertainment ($100-200/week), and travel insurance. Always budget extra for unexpected expenses.",
        },
      ],
    },
    {
      category: "Post-Study Options",
      icon: <FaUserGraduate className="text-primary text-xl" />,
      questions: [
        {
          question: "What are my options after completing my studies?",
          answer:
            "Options include: return home, apply for a Temporary Graduate visa (Subclass 485), seek permanent residency through skilled migration, continue studies, or apply for other visa types. The Temporary Graduate visa allows 2-4 years of work experience depending on your qualification.",
        },
        {
          question: "How do I apply for a Temporary Graduate visa?",
          answer:
            "Requirements include: completing an eligible qualification, meeting English language requirements, being under 50 years old, having adequate health insurance, and meeting health/character requirements. Apply within 6 months of completing your course.",
        },
        {
          question: "Can I apply for permanent residency after studying?",
          answer:
            "Yes, through various pathways: Skilled Independent visa (Subclass 189), Skilled Nominated visa (Subclass 190), Regional Sponsored visa (Subclass 491), or employer sponsorship. Requirements include: relevant qualifications, work experience, English proficiency, and meeting points requirements.",
        },
        {
          question: "What is the points system for skilled migration?",
          answer:
            "The points system awards points for: age (18-44 years), English proficiency, skilled work experience, qualifications, partner skills, and regional study. You need 65+ points to be eligible. Higher points increase your chances of receiving an invitation to apply.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-second text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl opacity-90">
              Everything you need to know about studying in Australia
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Your Journey to Australia Starts Here
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Get answers to all your questions about studying in Australia.
                  From visa requirements to living costs, we've got you covered
                  with comprehensive information to help you make informed
                  decisions.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Expert Guidance
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-second rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Up-to-date Information
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-second/10 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <FiHelpCircle className="text-6xl text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Need More Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our experts are here to
                  help.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={category?.id} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.category}
                </h3>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={item?.id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {/* Question Header */}
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold text-gray-800 pr-4">
                          {item.question}
                        </h4>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <FiChevronUp className="text-primary text-xl" />
                          ) : (
                            <FiChevronDown className="text-primary text-xl" />
                          )}
                        </div>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-primary to-second text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our experienced team is here to help you with personalized guidance
            for your study journey in Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/book")}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Send us a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
