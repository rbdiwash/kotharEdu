import React from "react";
import { BiChevronRight } from "react-icons/bi";
import book from "../assets/images/book.png";

const Book = () => {
  return (
    <>
      <section id="bookCover">
        <div className="container mx-auto py-12 ">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold  text-white "> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span className="text-primary">Book Now</span>
          </div>
          <p className="text-5xl uppercase text-white font-bold">
            Book an appointment
          </p>
          <p className="text-2xl text-white mt-4 leading-9 tracking-wide">
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
                <div className="form-container bg-white md:px-20 px-10 py-24 rounded-lg shadow-2xl">
                  <div class="mb-4 flex items-center flex-wrap md:space-x-6">
                    <span>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html" className="ml-2 text-black">
                        Class Enquiry
                      </label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html" className="ml-2 text-black">
                        Career Counseling
                      </label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html" className="ml-2 text-black">
                        Visa Consultation
                      </label>
                    </span>
                  </div>

                  <div class="mb-3">
                    <input
                      type="text"
                      class="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue focus:outline-2 focus:outline-blue"
                      id="exampleFormControlInput1"
                      placeholder="Your name here"
                    />
                  </div>
                  <div class="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                    <input
                      type="text"
                      class="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue"
                      id="exampleFormControlInput1"
                      placeholder="Contact No*"
                    />
                    <input
                      type="text"
                      class="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue"
                      id="exampleFormControlInput1"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div class="mb-6 mt-8">
                    <h2 className="mb-4"> Any Enquiry</h2>
                    <textarea
                      type="text"
                      rows={4}
                      class="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue"
                      id="exampleFormControlInput1"
                      placeholder="Write any enquiry you have ......."
                    />
                  </div>
                  <div className="btn w-max font-semibold">Book Now</div>
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
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Book;
