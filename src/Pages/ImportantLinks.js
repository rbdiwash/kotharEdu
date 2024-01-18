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
              Photo ID :
            </a>{" "}
            Visit the service centre nearby with your 100 Points of ID.
            (Passport + 2 more for of ID)
          </li>
          <li className="mb-3">
            <a
              href="https://www.hotdoc.com.au/"
              target="_blank"
              className="underline text font-semibold"
            >
              FLU & COVID Vaccine :
            </a>{" "}
            For COVID Vaccination Conversion: Please visit nearby medical centre
            or Pharmacy. For FLU vaccine, book a nearest GP and get vaccinated
            instantly.
          </li>
          {/* <h1 className="font-bold text-2xl  my-6">RPL Application</h1> */}
          <h1 className="font-bold text-2xl  my-6">Other Useful Links</h1>
          <li className="mb-3">
            <a
              href="https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn"
              target="_blank"
              className="underline text font-semibold"
            >
              Tax File Number (TFN){" "}
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://www.service.nsw.gov.au/transaction/apply-for-a-working-with-children-check and you also need to visit the service centre with all the mentioned documents."
              target="_blank"
              className="underline text font-semibold"
            >
              WWCC
            </a>{" "}
            : and you also need to visit the service centre with all the
            mentioned documents.
          </li>
          <li className="mb-3">
            <a
              href=" https://www.onegov.nsw.gov.au/PublicRegister/#/publicregister/search/RTO"
              target="_blank"
              className="underline text font-semibold"
            >
              RSA/RCG :
            </a>
            You have to attend the training from the RTOs, Click the link below
            to attain the training <br />
            <a
              href=" https://www.google.com/maps/d/u/0/viewer?
              mid=1f1JRySQivPrK2x0SJEOYK2urLki3PaA&femb=1&ll=-33.82005135508657%2"
              target="_blank"
              className="text-cyan-400 underline itallic"
            >
              https://www.google.com/maps/d/u/0/viewer?
              mid=1f1JRySQivPrK2x0SJEOYK2urLki3PaA&femb=1&ll=-33.82005135508657%2{" "}
            </a>
            <br />
          </li>
          <li className="mb-3">
            <a
              href=" https://www.onegov.nsw.gov.au/PublicRegister/#/publicregister/search/RTO"
              target="_blank"
              className="underline text font-semibold"
            >
              White Card :{" "}
            </a>{" "}
            <span className="no-underline pl-4">
              You have to attend training from the RTOs, Some of the RTOs links
              are: <br /> a.{" "}
              <a
                href="https://www.licences4work.com.au/"
                className="text-cyan-400 underline itallic"
                target="_blank"
              >
                https://www.licences4work.com.au/
              </a>
              <br /> b.{" "}
              <a
                href="https://australiawhitecard.com.au/"
                className="text-cyan-400 underline itallic"
                target="_blank"
              >
                {" "}
                https://australiawhitecard.com.au/{" "}
              </a>
            </span>
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
          <li className="mb-3">
            <a
              href="https://ndis.gov.au/applying-access-ndis/how-apply"
              target="_blank"
            >
              <span className="underline text font-semibold">
                NSW Driving licence:
              </span>
              <br />
              <p className="font-normal no-underline	">
                Initially, if you are under 25 years of age and want to apply
                for Australian Driving licence then, <br />
                <br /> 1. You have to attend DKT Test,{" "}
                <a
                  className="text-cyan-400 underline itallic"
                  href="https://www.service.nsw.gov.au/transaction/book-a-driver-knowledge-test-dkt"
                >
                  https://www.service.nsw.gov.au/transaction/book-a-driver-knowledge-test-dkt
                </a>{" "}
                <br /> your leaner licence will be issued after passing DKT
                test, you have to stay in L licence for a year and only be able
                to drive in the supervision of Australian Full Licence Holder.
                You are required to fill up 120 hrs driving logbook during this
                period.
                <br />
                <br /> 2. Hazard test:{" "}
                <a
                  className="text-cyan-500 underline itallic"
                  href="https://www.service.nsw.gov.au/transaction/book-a-hazard-perception-test-hpt"
                >
                  https://www.service.nsw.gov.au/transaction/book-a-hazard-perception-test-hpt
                </a>{" "}
                <br />
                You must held your learner driver licence for at least 10 months
                to actually able to Book HPT Test <br />
                <br />
                3. Driver or Rider Licence test: After completing DKT and HPT,
                you can actually book for Driving test{" "}
                <a
                  className="text-cyan-400 underline itallic"
                  href="https://www.service.nsw.gov.au/transaction/book-a-driver-or-rider-licence-test"
                >
                  https://www.service.nsw.gov.au/transaction/book-a-driver-or-rider-licence-test
                </a>
              </p>
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
