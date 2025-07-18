import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import book from "../assets/images/book.png";
import axios from "../Utils/Axios";
import ErrorMessage from "../Components/ErrorMessage";
import SuccessMessage from "../Components/SuccessMessage";
const Book = () => {
  const [data, setData] = useState({ enquiryType: "Class" });
  const [message, setMessage] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("book-appointment", data)
      .then((res) => {
        // console.log(res);
        setMessage({ success: res?.data?.message });
        setData({
          enquiryType: "Class",
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
    <>
      <section id="bookCover">
        <div className="container mx-auto py-12 ">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold  text-white "> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span className="text-primary">Book Now</span>
          </div>
          <p className="md:text-5xl text-3xl uppercase text-white font-bold">
            Book an appointment
          </p>
          <p className="md:text-2xl text-xl text-white mt-4 md:leading-9 tracking-wide">
            For more enquiry and curiosity please <br /> book an appointment
          </p>
        </div>
      </section>
      <section id="book" className="md:mt-[-120px]">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid md:grid-cols-6 grid-cols-1 items-center  mt-8">
              <div className="col-span-2">
                <img src={book} alt="" className="w-[110%]" />
              </div>
              <div className="col-span-4 mt-10 md:mt-0">
                <div className="form-container bg-white md:px-20 px-10 md:py-24 py-12 rounded-lg shadow-2xl">
                  <form onSubmit={handleSubmit}>
                    <fieldset
                      className="mb-6 flex items-center flex-wrap md:space-x-6"
                      required
                      id="group"
                    >
                      <span className="mr-4 md:mr-0">
                        <input
                          type="radio"
                          id="Class"
                          name="enquiryType"
                          value="Class"
                          required
                          checked={data?.enquiryType === "Class"}
                          onChange={handleInputChange}
                        />
                        <label for="Class" className="ml-2 text-black">
                          Class Enquiry
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          id="Career"
                          name="enquiryType"
                          value="Career"
                          onChange={handleInputChange}
                        />
                        <label for="Career" className="ml-2 text-black">
                          Career Counseling
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          id="Visa"
                          name="enquiryType"
                          value="Visa"
                          onChange={handleInputChange}
                        />
                        <label for="Visa" className="ml-2 text-black">
                          Visa Consultation
                        </label>
                      </span>
                    </fieldset>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue focus:outline-2 focus:outline-blue"
                        placeholder="Your name here"
                        required
                        value={data?.name}
                        onChange={handleInputChange}
                        name="name"
                      />
                    </div>
                    <div className="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                      <input
                        type="number"
                        className="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue"
                        placeholder="Contact No*"
                        required
                        // type="tel"
                        // pattern="[0-9]{10}"
                        name="contactNo"
                        value={data?.contactNo}
                        onChange={handleInputChange}
                      />
                      <input
                        className="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue"
                        placeholder="Email Address*"
                        type="email"
                        name="email"
                        value={data?.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-6 mt-8">
                      <h2 className="mb-4"> Any Enquiry</h2>
                      <textarea
                        type="text"
                        name="enquiry"
                        value={data?.enquiry}
                        rows={4}
                        className="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue"
                        placeholder="Write any enquiry you have ......."
                        onChange={handleInputChange}
                        required
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
                    <button
                      type="submit"
                      className="btn w-max font-semibold mt-4"
                    >
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.429220040901!2d151.2051230762815!3d-33.87859797322291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af062147e355%3A0x996a2c85f8e5b884!2sPrisms%20Education%20%26%20Visa%20Services!5e0!3m2!1sen!2sau!4v1751344664477!5m2!1sen!2sau"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Book;
