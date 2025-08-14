import React from "react";
import { BiChevronRight } from "react-icons/bi";

const ClientDetailsForm = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-lightBlue">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-3 mb-6">
          <h1 className="font-semibold flex items-center">Home</h1>
          <BiChevronRight className="text-2xl" />
          <span className="text-primary font-semibold">
            Client Details Form
          </span>
        </div>

        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-second mb-4">
            Client Details Form
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please fill out this form to help us understand your requirements
            better. This information will help us provide you with the most
            relevant guidance and support for your study journey in Australia.
          </p>
          <p className="text-lg  max-w-3xl mx-auto text-gray-600 mt-4">
            If the form is not working, please click{" "}
            <a
              href="https://forms.gle/gmEwA1R6fzAjtMLa7"
              className="text-second underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfYgs_Sc0nwT8y0NGLDwGMwNzypXf3hZLCpuqXRIoQvmXTU6A/viewform?embedded=true"
                className="w-full h-[800px] border-0"
                title="Client Details Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDetailsForm;
