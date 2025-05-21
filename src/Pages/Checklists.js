import React, { useState, useEffect } from "react";
import {
  FiDownload,
  FiChevronDown,
  FiChevronUp,
  FiShare2,
  FiCopy,
  FiEye,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import studentVisaOffShore from "../assets/pdfs/Checklist For Student Visa.pdf";
import GTEQuestionnaire from "../assets/pdfs/Student Visa GTE Question.pdf";
import TRVisaChecklist from "../assets/pdfs/TR Visa Form & Check List.pdf";
import TouristVisaCheckList from "../assets/pdfs/Checklist For Tourist Visa.pdf";
import sponsorVisaCheckList from "../assets/pdfs/Check List_Kothar.pdf";
import skillAssessmentCheckList from "../assets/pdfs/Document checklist for VETASSESS skills assessment.pdf";
import Form956 from "../assets/pdfs/Form 956.pdf";
import Form1022 from "../assets/pdfs/1022 Form_unlocked.pdf";
import Form80 from "../assets/pdfs/Form 80_unlocked.pdf";
import AffidavitOfSupport from "../assets/pdfs/AFFIDAVIT OF SUPPORT_Form.pdf";

const Checklists = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  // Get category from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
      // Find and expand the matching category
      const categoryIndex = checklists.findIndex(
        (c) => c.category === category
      );
      if (categoryIndex !== -1) {
        setExpandedCategory(categoryIndex);
      }
    }
  }, []);

  const checklists = [
    {
      category: "Client Details Checklist",
      items: [
        {
          title: "Client Details Form Kothar",
          description:
            "Please Fill out this form to help us understand your requirements better. This information will help us provide you with the most relevant guidance and support for your study journey in Australia.",
          pdfUrl: "/pdfs/Client Details Form Kothar.pdf",
          type: "form",
          url: "/explore/client-details-form",
        },
      ],
    },
    {
      category: "Student Visa",
      items: [
        {
          title: "Student Visa Offshore Application Checklist",
          description:
            "Complete checklist for student visa application process",
          pdfUrl: studentVisaOffShore,
        },
        {
          title: "Student Visa Onshore Application Checklist",
          description:
            "Complete checklist for student visa application process",
          pdfUrl: studentVisaOffShore,
        },
        {
          title: "GTE Questionnaire",
          description: "GTE Questionnaire for student visa application",
          pdfUrl: GTEQuestionnaire,
        },
        // {
        //   title: "SOP Sample",
        //   description: "SOP Sample for student visa application",
        //   pdfUrl: "/pdfs/sop-sample.pdf",
        // },
      ],
    },
    {
      category: "TR Visa Application",
      items: [
        {
          title: "TR Visa Application Checklist",
          description: "Essential items and tasks for TR Visa application",
          pdfUrl: TRVisaChecklist,
        },
        {
          title: "Police Check",
          description: "Police Check for TR Visa application",
          pdfUrl:
            "https://afpnationalpolicechecks.converga.com.au/agreement/timeout",
          url: "https://afpnationalpolicechecks.converga.com.au/agreement/timeout",
          type: "form",
        },
      ],
    },
    // {
    //   category: "Permanent Resident Visa Application",
    //   items: [
    //     {
    //       title: "190 Visa Application Checklist",
    //       description: "Essential items and tasks for 190 Visa application",
    //       pdfUrl: "/pdfs/190-visa-checklist.pdf",
    //     },
    //     {
    //       title: "189 Visa Application Checklist",
    //       description: "Essential items and tasks for 189 Visa application",
    //       pdfUrl: "/pdfs/189-visa-checklist.pdf",
    //     },
    //     {
    //       title: "186 Visa Application Checklist",
    //       description: "Essential items and tasks for 186 Visa application",
    //       pdfUrl: "/pdfs/186-visa-checklist.pdf",
    //     },
    //     {
    //       title: "491 Visa Application Checklist",
    //       description: "Essential items and tasks for 491 Visa application",
    //       pdfUrl: "/pdfs/491-visa-checklist.pdf",
    //     },
    //   ],
    // },
    {
      category: "Other Visas",
      items: [
        {
          title: "Tourist Visa(600) Application Checklist",
          description: "Essential items and tasks for tourist visa application",
          pdfUrl: TouristVisaCheckList,
        },
        // {
        //   title: "Student Subsequent Visa(500) Checklist",
        //   description: "Essential items and tasks for student visa application",
        //   pdfUrl: "/pdfs/student-subsequent-visa-checklist.pdf",
        // },
        {
          title: "Sponsor Visa(482) Checklist",
          description: "Essential items and tasks for sponsor visa application",
          pdfUrl: sponsorVisaCheckList,
        },
        // {
        //   title: "Partner Visa(820) Checklist",
        //   description: "Essential items and tasks for partner visa application",
        //   pdfUrl: "/pdfs/partner-visa-checklist.pdf",
        // },
      ],
    },
    {
      category: "Skills Assessment",
      items: [
        {
          title: "Skills Assessment Checklist",
          description: "Step-by-step guide for university applications",
          pdfUrl: skillAssessmentCheckList,
        },
      ],
    },
    // {
    //   category: "RPL Application",
    //   items: [
    //     {
    //       title: "RPL Application Checklist",
    //       description: "Essential items and tasks before leaving for Australia",
    //       pdfUrl: "/pdfs/pre-departure.pdf",
    //     },
    //     {
    //       title: "Accommodation Guide",
    //       description: "Guide to finding and securing accommodation",
    //       pdfUrl: "/pdfs/accommodation-guide.pdf",
    //     },
    //   ],
    // },
    {
      category: "Immigration Forms",
      items: [
        {
          title: "956 Form",
          description: "956 Form",
          pdfUrl: Form956,
        },
        {
          title: "1022 Form",
          description: "1022 Form",
          pdfUrl: Form1022,
        },
        {
          title: "80 Form",
          description: "80 Form",
          pdfUrl: Form80,
        },
        {
          title: "AFFIDAVIT of Support",
          description: "AFFIDAVIT of Support",
          pdfUrl: AffidavitOfSupport,
        },
      ],
    },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleViewPDF = (pdfUrl) => {
    const fullUrl = pdfUrl.startsWith("http")
      ? pdfUrl
      : `${window.location.origin}${pdfUrl}`;
    window.open(fullUrl, "_blank");
  };

  const handleDownload = (pdfUrl) => {
    if (pdfUrl.startsWith("http")) {
      window.open(pdfUrl, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.download = pdfUrl.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleShare = (category) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?category=${encodeURIComponent(category)}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleShareItem = (pdfUrl, title) => {
    const fullUrl = pdfUrl.startsWith("http")
      ? pdfUrl
      : `${window.location.origin}${pdfUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedItem(title);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  const clearCategory = () => {
    setSelectedCategory("");
    setExpandedCategory(null);
    // Remove category from URL
    const newUrl = window.location.pathname;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-lightBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-second mb-4">
            Student Checklists
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Download our comprehensive checklists to help you prepare for your
            study journey in Australia
          </p>

          {selectedCategory && (
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="text-sm text-gray-600">
                Filtered by:{" "}
                <span className="font-semibold">{selectedCategory}</span>
              </span>
              <button
                onClick={clearCategory}
                className="text-sm text-second hover:text-primary transition-colors duration-300"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {checklists.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-second text-white">
                <button
                  onClick={() => toggleCategory(index)}
                  className="flex items-center justify-between w-full"
                >
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                  {expandedCategory === index ? (
                    <FiChevronUp className="text-2xl" />
                  ) : (
                    <FiChevronDown className="text-2xl" />
                  )}
                </button>
                <button
                  onClick={() => handleShare(category.category)}
                  className="ml-4 flex items-center space-x-2 hover:text-primary transition-colors duration-300"
                >
                  <FiShare2 />
                  <span className="text-sm">Share</span>
                </button>
              </div>

              {expandedCategory === index && (
                <div className="p-6 space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>

                      {item?.type === "form" ? (
                        <div className="flex items-center space-x-2">
                          <Link
                            to={item.url}
                            target="_blank"
                            className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                          >
                            <FiEye />
                            <span className="hidden sm:inline">View</span>
                          </Link>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleViewPDF(item.pdfUrl)}
                            className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                            title="View PDF"
                          >
                            <FiEye />
                            <span className="hidden sm:inline">View</span>
                          </button>
                          <button
                            onClick={() =>
                              handleShareItem(item.pdfUrl, item.title)
                            }
                            className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                            title="Share PDF Link"
                          >
                            <FiShare2 />
                            <span className="hidden sm:inline">Share</span>
                          </button>
                          <button
                            onClick={() => handleDownload(item.pdfUrl)}
                            className="flex items-center space-x-2 bg-second text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-300"
                          >
                            <FiDownload />
                            <span className="hidden sm:inline">Download</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Copy Success Toast */}
        {copySuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <FiCopy />
            <span>Category link copied to clipboard!</span>
          </div>
        )}

        {/* Individual Item Copy Success Toast */}
        {copiedItem && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
            <FiCopy />
            <span>PDF link for "{copiedItem}" copied to clipboard!</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Checklists;
