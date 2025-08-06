import React from "react";
import ContactForm from "./ContactForm";

const TakePartEvent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Content Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium border border-primary/20">
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></span>
                </div>
                <span>Join Our Events</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Take Part in
                  <span className="block text-primary">Our Events</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Enroll in our preparation classes and workshops designed to
                  help you succeed in your study abroad journey.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Expert-led workshops
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Interactive sessions
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Networking opportunities
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Free consultation
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    20+
                  </div>
                  <div className="text-gray-600 text-sm">Events This Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    200+
                  </div>
                  <div className="text-gray-600 text-sm">Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakePartEvent;
