import React from "react";
import { BiChevronRight } from "react-icons/bi";
import logo from "../assets/images/logo.png";

const ImportantLinks = () => {
  document.title = "Kothar: Important Links";
  return (
    <section id="contactPage">
      <div className="container mx-auto py-12 md:py-24">
        <div className="row">
          <div className="flex items-center space-x-3 mb-6">
            <h1 className="font-semibold flex items-center">Home</h1>
            <BiChevronRight className="text-2xl" />
            <span className="text-primary font-semibold">Important Links</span>
          </div>
          <h5> These are the important links for various certificates. </h5>
          <h1 className="font-bold text-2xl  my-6">Age Care</h1>
          <li className="mb-3">
            <a
              href="https://afpnationalpolicechecks.converga.com.au/agreement/timeout"
              target="_blank"
              className="underline text font-semibold "
            >
              Police Check
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://www.service.nsw.gov.au/transaction/apply-for-a-nsw-photo-card"
              target="_blank"
              className="underline text font-semibold"
            >
              Photo ID
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://www.hotdoc.com.au/"
              target="_blank"
              className="underline text font-semibold"
            >
              FLU & COVID Vaccine : Book a GP near you and get vaccinated.
            </a>
          </li>
          {/* <h1 className="font-bold text-2xl  my-6">RPL Application</h1> */}
          <h1 className="font-bold text-2xl  my-6">Other Useful Links</h1>
          <li className="mb-3">
            <a
              href=" https://www.onegov.nsw.gov.au/PublicRegister/#/publicregister/search/RTO"
              target="_blank"
              className="underline text font-semibold"
            >
              White Card
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://www.service.nsw.gov.au/transaction/apply-for-an-rsa-or-rcg-competency-card"
              target="_blank"
              className="underline text font-semibold"
            >
              Apply RSA
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://ndis.gov.au/applying-access-ndis/how-apply"
              target="_blank"
              className="underline text font-semibold"
            >
              Apply NDIS Online
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
