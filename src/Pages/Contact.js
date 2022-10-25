import React from "react";
import { BiChevronRight } from "react-icons/bi";
import contact from "../assets/images/quick_contact.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div className="container mx-auto py-12 md:py-24">
        <div className="row">
          <h1 className="font-semibold flex items-center">
            Home <BiChevronRight />
            <span className="text-primary">Contact Us</span>
          </h1>
          <p className="section-heading text-black text-left mt-8">
            SEND MESSAGE
          </p>
          <p className="text-left">For more enquiry contact us</p>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-12 mt-8">
            <div className="col-span-1">
              <img src={contact} alt="" />
            </div>
            <div className="col-span-1">
              <div className="form-container bg-[#C2F6FF] px-16 py-24 rounded-lg shadow-md">
                <div class="mb-3">
                  <input
                    type="text"
                    class="input-form bg-white"
                    id="exampleFormControlInput1"
                    placeholder="Full Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="input-form bg-white"
                    id="exampleFormControlInput1"
                    placeholder="Contact Number"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="input-form bg-white"
                    id="exampleFormControlInput1"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    type="text"
                    rows={4}
                    class="input-form bg-white"
                    id="exampleFormControlInput1"
                    placeholder="Your Enquiry"
                  />
                </div>
                <div className="btn w-max font-semibold px-12">Send</div>
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
  );
};

export default Contact;
