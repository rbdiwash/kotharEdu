import React from "react";

const ContactForm = () => {
  return (
    <div className="lg:col-span-4 col-span-6">
      <div className="bg-blue px-12 py-16 rounded-md">
        <div className="flex justify-between">
          <div className="w-1/2 flex flex-col space-y-12 text-left text-white">
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
          <div className="w-1/2 flex flex-col text-left text-white justify-between">
            <div class="md:mb-3">
              <input
                type="text"
                class="input-form"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div class="md:mb-3">
              <input
                type="text"
                class="input-form"
                id="exampleFormControlInput1"
                placeholder="Contact Number"
              />
            </div>
            <div class="md:mb-3">
              <input
                type="text"
                class="input-form"
                id="exampleFormControlInput1"
                placeholder="Email Address"
              />
            </div>
            <div class="md:mb-3">
              <textarea
                type="text"
                rows={4}
                class="input-form"
                id="exampleFormControlInput1"
                placeholder="Your Enquiry"
              />
            </div>
            <div className="btn w-max">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
