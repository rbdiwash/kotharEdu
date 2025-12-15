import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import {
  IoInformation,
  IoInformationCircle,
  IoNotificationsCircleOutline,
} from "react-icons/io5";

const PRCalculator = () => {
  document.title = "PR Calculator - Kothar Educational Services";

  const [formData, setFormData] = useState({
    visaSubclass: "",
    age: "",
    englishScore: "",
    overseasWorkExperience: "",
    australianWorkExperience: "",
    education: "",
    australianStudy: "no",
    specialistEducation: "no",
    communityLanguage: "no",
    studyInRegional: "no",
    partnerSkills: "no",
    professionalYear: "no",
    stateNomination: "no",
  });

  const [totalPoints, setTotalPoints] = useState(0);
  const [pointBreakdown, setPointBreakdown] = useState({});

  const visaSubclasses = [
    {
      value: "188",
      label:
        "Business Innovation and Investment (Provisional) visa (subclass 188)",
    },
    { value: "189", label: "Skilled Independent visa (subclass 189)" },
    { value: "190", label: "Skilled Nominated visa (subclass 190)" },
    {
      value: "489",
      label: "Skilled Regional (Provisional) visa (subclass 489)",
    },
    {
      value: "491",
      label: "Skilled Work Regional (Provisional) visa (subclass 491)",
    },
  ];

  const calculatePoints = () => {
    let points = 0;
    let breakdown = {};

    // Age points
    const age = parseInt(formData.age);
    if (age >= 18 && age <= 25) {
      points += 25;
      breakdown.age = 25;
    } else if (age >= 26 && age <= 33) {
      points += 30;
      breakdown.age = 30;
    } else if (age >= 34 && age <= 39) {
      points += 25;
      breakdown.age = 25;
    } else if (age >= 40 && age <= 44) {
      points += 15;
      breakdown.age = 15;
    } else if (age >= 45 && age <= 49) {
      points += 0;
      breakdown.age = 0;
    }

    // English points
    const englishScore = parseInt(formData.englishScore);
    if (englishScore >= 8) {
      points += 20;
      breakdown.englishLanguageSkills = 20;
    } else if (englishScore >= 7) {
      points += 10;
      breakdown.englishLanguageSkills = 10;
    } else if (englishScore >= 6) {
      points += 0;
      breakdown.englishLanguageSkills = 0;
    }

    // Overseas Work Experience points
    const overseasExp = parseInt(formData.overseasWorkExperience);
    if (overseasExp >= 8) {
      points += 15;
      breakdown.workExperienceOutsideAustralia = 15;
    } else if (overseasExp >= 5) {
      points += 10;
      breakdown.workExperienceOutsideAustralia = 10;
    } else if (overseasExp >= 3) {
      points += 5;
      breakdown.workExperienceOutsideAustralia = 5;
    }

    // Australian Work Experience points
    const australianExp = parseInt(formData.australianWorkExperience);
    if (australianExp >= 8) {
      points += 20;
      breakdown.workExperienceInAustralia = 20;
    } else if (australianExp >= 5) {
      points += 15;
      breakdown.workExperienceInAustralia = 15;
    } else if (australianExp >= 3) {
      points += 10;
      breakdown.workExperienceInAustralia = 10;
    } else if (australianExp >= 1) {
      points += 5;
      breakdown.workExperienceInAustralia = 5;
    }

    // Education points
    const education = formData.education;
    if (education === "phd") {
      points += 20;
      breakdown.qualifications = 20;
    } else if (education === "masters") {
      points += 15;
      breakdown.qualifications = 15;
    } else if (education === "bachelors") {
      points += 15;
      breakdown.qualifications = 15;
    } else if (education === "diploma") {
      points += 10;
      breakdown.qualifications = 10;
    }

    // Australian Study points
    if (formData.australianStudy === "yes") {
      points += 5;
      breakdown.australianStudyRequirement = 5;
    }

    // Specialist Education points
    if (formData.specialistEducation === "yes") {
      points += 10;
      breakdown.specialistEducationQualification = 10;
    }

    // Community Language points
    if (formData.communityLanguage === "yes") {
      points += 5;
      breakdown.accreditationInCommunityLanguage = 5;
    }

    // Study in Regional Australia points
    if (formData.studyInRegional === "yes") {
      points += 5;
      breakdown.studyInRegionalAustralia = 5;
    }

    // Partner Skills points
    if (formData.partnerSkills === "yes") {
      points += 10;
      breakdown.partnerSkills = 10;
    }

    // Professional Year points
    if (formData.professionalYear === "yes") {
      points += 5;
      breakdown.professionalYearInAustralia = 5;
    }

    // State Nomination points
    if (formData.stateNomination === "yes") {
      points += 5;
      breakdown.nominationByStateOrTerritoryGovernment = 5;
    }

    setTotalPoints(points);
    setPointBreakdown(breakdown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePoints();
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-lightBlue">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-6">
          <h1 className="font-semibold flex items-center">Home</h1>
          <BiChevronRight className="text-2xl" />
          <span className="text-primary font-semibold">
            PR Points Calculator
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-second mb-6">
              PR Points Calculator
            </h2>
            <p className="text-gray-600 mb-8">
              Calculate your points for Australian Permanent Residency based on
              the latest criteria from the Department of Home Affairs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select visa subclass
                  </label>
                  <select
                    value={formData.visaSubclass}
                    onChange={(e) =>
                      setFormData({ ...formData, visaSubclass: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="">Select visa subclass</option>
                    {visaSubclasses.map((subclass) => (
                      <option key={subclass.value} value={subclass.value}>
                        {subclass.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                    min="18"
                    max="49"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    English Score (IELTS)
                  </label>
                  <input
                    type="number"
                    value={formData.englishScore}
                    onChange={(e) =>
                      setFormData({ ...formData, englishScore: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                    min="6"
                    max="9"
                    step="0.5"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Overseas Work Experience (Years)
                  </label>
                  <input
                    type="number"
                    value={formData.overseasWorkExperience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        overseasWorkExperience: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Australian Work Experience (Years)
                  </label>
                  <input
                    type="number"
                    value={formData.australianWorkExperience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        australianWorkExperience: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Education Level
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) =>
                      setFormData({ ...formData, education: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="">Select Education</option>
                    <option value="phd">PhD</option>
                    <option value="masters">Masters</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="diploma">Diploma</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Australian Study Requirement
                  </label>
                  <select
                    value={formData.australianStudy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        australianStudy: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2  text-gray-700 font-medium mb-2">
                    Specialist Education Qualification(Research or Doctorate)
                  </label>
                  <select
                    value={formData.specialistEducation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialistEducation: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Community Language
                  </label>
                  <select
                    value={formData.communityLanguage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        communityLanguage: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Study and Stay in Regional Australia
                  </label>
                  <select
                    value={formData.studyInRegional}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studyInRegional: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Partner Skills
                  </label>
                  <select
                    value={formData.partnerSkills}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        partnerSkills: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Professional Year in Australia
                  </label>
                  <select
                    value={formData.professionalYear}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        professionalYear: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    State Nomination
                  </label>
                  <select
                    value={formData.stateNomination}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stateNomination: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-second/20 focus:border-second outline-none"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-second text-white py-3 rounded-lg hover:bg-primary transition-colors duration-300"
              >
                Calculate Points
              </button>
            </form>

            {totalPoints > 0 && (
              <div className="mt-8 space-y-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-second mb-4">
                    Your total points summary
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-medium">
                        {pointBreakdown.age || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        English language skills:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.englishLanguageSkills || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Work experience outside Australia:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.workExperienceOutsideAustralia || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Work experience in Australia:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.workExperienceInAustralia || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Qualifications:</span>
                      <span className="font-medium">
                        {pointBreakdown.qualifications || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Specialist education qualification:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.specialistEducationQualification || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Australian study requirement:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.australianStudyRequirement || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Accreditation in community language:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.accreditationInCommunityLanguage || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Study in regional Australia:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.studyInRegionalAustralia || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Partner skills:</span>
                      <span className="font-medium">
                        {pointBreakdown.partnerSkills || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Professional year in Australia:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.professionalYearInAustralia || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Nomination by a state or territory government:
                      </span>
                      <span className="font-medium">
                        {pointBreakdown.nominationByStateOrTerritoryGovernment ||
                          0}
                      </span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 font-semibold">
                          Your points total:
                        </span>
                        <span className="font-bold text-second">
                          {totalPoints}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-second mb-2">
                    Result
                  </h3>
                  <p className="text-gray-600">
                    {totalPoints >= 65 ? (
                      <span className="text-green-600">
                        Congratulations! You meet the minimum points requirement
                        for PR.
                      </span>
                    ) : (
                      <span className="text-red-600">
                        You need {65 - totalPoints} more points to meet the
                        minimum requirement.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRCalculator;
