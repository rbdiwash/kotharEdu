import React, { useState } from "react";
import axios from "../Utils/Axios";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const ContactForm = ({ nepal }) => {
  const [data, setData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const [message, setMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("send-message", data)
      .then((res) => {
        // console.log(res);
        setMessage({ success: res?.data?.message });
        setData({
          name: "",
          contactNo: "",
          email: "",
          enquiry: "",
        });
      })
      .catch((err) => {
        setMessage({ error: err?.data?.message });
      });
  };

  return (
    <div className="lg:col-span-4 col-span-6">
      <div className="bg-second rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-medium border border-white/20">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-600"></span>
                  </div>
                  <span>Get in Touch</span>
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-white/90 leading-relaxed">
                  Get in touch with our expert team for personalized guidance
                  and support.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Our Office
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {nepal
                        ? "MaijuBahal, Kathmandu"
                        : "Suite 273, Level 2, 398/408 Pitt St, Haymarket NSW 2000"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-white/80">
                      {nepal ? "01-14500571, 9741688965" : "0480322403"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-white/80">
                      {nepal ? "info@kotharedunepal.com" : "info@kotharedu.com"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
                      placeholder="Full Name"
                      required
                      value={data?.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="contactNo"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
                      placeholder="Contact Number"
                      required
                      value={data?.contactNo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={data?.email}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
                      placeholder="Email Address"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="enquiry"
                      value={data?.enquiry}
                      rows={4}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 resize-none"
                      placeholder="Tell us about your study goals..."
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Messages */}
                {message?.success && (
                  <SuccessMessage
                    message={message?.success}
                    setMessage={setMessage}
                  />
                )}
                {message?.error && (
                  <ErrorMessage
                    message={message?.error}
                    setMessage={setMessage}
                  />
                )}

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-white/90 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
