import React from "react";
import ContactForm from "./ContactForm";

const TakePartEvent = () => {
  return (
    <section className="contact md:my-16 my-8">
      <div className="container mx-auto mb-12">
        <div className="row">
          <div className="grid grid-cols-6  items-center">
            <div className="lg:col-span-2 col-span-6">
              <p className="section-heading text-primary text-left">
                Take part in events
              </p>
              <p className="section-subHeading text-left">
                Enroll your Preparation Class with <br /> Kothar Education
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakePartEvent;
