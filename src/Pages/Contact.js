import React, { useState } from "react";
import axios from "../Utils/Axios";
import ErrorMessage from "../Components/ErrorMessage";
import SuccessMessage from "../Components/SuccessMessage";
import {
  BiChevronRight,
  BiPhone,
  BiEnvelope,
  BiMap,
  BiTime,
} from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import contact from "../assets/images/quick_contact.png";

const Contact = () => {
  const [data, setData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const [message, setMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post("send-message", data);
      setMessage({ success: res?.data?.message });
      setData({
        name: "",
        contactNo: "",
        email: "",
        enquiry: "",
      });
    } catch (err) {
      setMessage({ error: err?.data?.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="py-8">
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Home
            </span>
            <BiChevronRight className="text-xl" />
            <span className="text-primary font-semibold">Contact Us</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <BiEnvelope className="text-primary text-xl" />
            <span className="text-gray-600 font-medium">Get In Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Start Your Journey
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step? Contact us today and let our experts
            guide you towards your study abroad dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <BiMap className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Suite 273, Level 2, 398/408 Pitt St, Haymarket NSW 2000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <BiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <a
                      href="tel:0480322403"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      +61 480 322 403
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <BiEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:info@kotharedu.com"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      info@kotharedu.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <BiTime className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Mon - Fri: 10:00 AM - 6:00 PM
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/kothareducation"
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaFacebook className="text-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/kothareducation/"
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                  <a
                    href="mailto:info@kotharedu.com"
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <BiEnvelope className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your full name"
                      required
                      value={data?.name || ""}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="contactNo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your phone number"
                      required
                      value={data?.contactNo || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email address"
                    required
                    value={data?.email || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="enquiry"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your study abroad plans..."
                    required
                    value={data?.enquiry || ""}
                    onChange={handleInputChange}
                  ></textarea>
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-second text-white py-4 px-8 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <BiChevronRight className="text-lg" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Find Us</h2>
            <p className="text-gray-600 mt-2">
              Visit our office in the heart of Sydney
            </p>
          </div>
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.429889780149!2d151.20512837727566!3d-33.8785807195682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb69e2955d53%3A0x6ad24eb26655122c!2sKOTHAR%20Educational%20Services!5e0!3m2!1sen!2sau!4v1754377157095!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kothar Education Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
