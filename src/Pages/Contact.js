import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import ErrorMessage from "../Components/ErrorMessage";
import SuccessMessage from "../Components/SuccessMessage";
import { BiChevronRight } from "react-icons/bi";
import contact from "../assets/images/quick_contact.png";

const Contact = () => {
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
    <section id="contactPage">
      <div className="container mx-auto py-12 md:py-24">
        <div className="row">
          <div className="flex items-center space-x-3 mb-6">
            <h1 className="font-semibold flex items-center">Home</h1>
            <BiChevronRight className="text-3xl" />{" "}
            <span className="text-primary font-semibold">Contact Us</span>
          </div>
          <p className="section-heading text-black text-left mt-8">
            SEND MESSAGE
          </p>
          <p className="text-left">For more enquiry contact us</p>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-12 mt-8">
            <div className="col-span-1">
              <img src={contact} alt="" />
            </div>
            <div className="col-span-1">
              <div className="form-container bg-[#C2F6FF] md:px-16 px-8 py-12 md:py-24 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5 mt-6 md:mt-0">
                    <input
                      type="text"
                      name="name"
                      className="input-form bg-white"
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
                      className="input-form bg-white"
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
                      className="input-form bg-white"
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
                      className="input-form bg-white"
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
                      message={message?.error}
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
      </div>

      <div className="map md:mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689223287!2d85.29111335466297!3d27.70903193322794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1666725045175!5m2!1sen!2snp"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
