import React, { useState } from "react";
import axios from "../Utils/Axios";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const ContactForm = () => {
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
      <div className="bg-blue px-12 py-16 rounded-md">
        <div className="grid grid-cols-2 justify-between">
          <div className="md:col-span-1 col-span-2 flex flex-col space-y-11 text-left text-white">
            <div className="section-heading text-white text-left">
              Get in touch
            </div>
            <div>
              <p className="text-2xl font-semibold  text-white text-left">
                Address
              </p>
              <p className="text-[#dfdfdf] mt-3">K110/81-86 Courallie Avenue</p>
              <p className="text-[#dfdfdf]">Homebush west Sydney NSW 2140</p>
            </div>
            <div className="div">
              <p className="text-2xl font-semibold  text-white text-left">
                Call Us
              </p>
              <p className="text-[#dfdfdf] mt-3">0480322403</p>
            </div>
            <div className="div">
              <p className="text-2xl font-semibold  text-white text-left py-0">
                Email Addreess
              </p>
              <p className="text-[#dfdfdf] mt-3">kothareducation@gmail.com</p>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 flex flex-col text-left text-white justify-between">
            <form onSubmit={handleSubmit}>
              <div className="mb-5 mt-6 md:mt-0">
                <input
                  type="text"
                  name="name"
                  className="input-form"
                  placeholder="Full Name"
                  required
                  value={data?.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="number"
                  name="contactNo"
                  className="input-form"
                  placeholder="Contact Number"
                  required
                  value={data?.contactNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  value={data?.email}
                  className="input-form"
                  placeholder="Email Address"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  name="enquiry"
                  value={data?.enquiry}
                  rows={4}
                  className="input-form"
                  placeholder="Your Enquiry"
                  required
                  onChange={handleInputChange}
                />
              </div>
              {message?.success && (
                <SuccessMessage
                  message={message?.success}
                  setMessage={setMessage}
                />
              )}
              {message?.error && (
                <ErrorMessage
                  message={message?.success}
                  setMessage={setMessage}
                />
              )}
              <button type="submit" className="btn w-max mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
