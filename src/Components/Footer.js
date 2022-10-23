import React from "react";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
const options = [
  { label: "About Us", url: "", id: "1" },
  { label: "Scholarships", url: "", id: "2" },
  { label: "Universities", url: "", id: "3" },
  { label: "Resources", url: "", id: "4" },
  { label: "Explore", url: "", id: "5" },
  { label: "Terms and Conditions", url: "", id: "6" },
];

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="text-white bg-altBlack px-4">
        <div class="container pt-6 mx-auto">
          <div class="py-12">
            <div class="flex justify-start md:justify-center mb-12">
              <img
                src={logo}
                className="mr-3 h-16 md:h-28"
                alt="Flowbite Logo"
              />
            </div>
            <div class="grid lg:grid-cols-5 md:grid-cols-1 items-start  gap-16">
              <div class="mb-6 md:col-span-2">
                <h1 class="uppercase text-2xl font-bold mb-2.5 border-b-2 border-primary pb-2 w-max">
                  Head office
                </h1>

                <ul class="list-none mb-0 md:pr-16">
                  <li className="py-2">
                    <a href="#!" class="text-white text-xl">
                      K110/81-86 Courallie Avenue Homebush west Sydney NSW 2140
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#!" class="text-white text-xl">
                      Email: kothareducation@gmail.com
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#!" class="text-white text-xl">
                      Call Us: 0480322403
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mb-6">
                <h1 class="uppercase text-2xl font-bold mb-2.5 border-b-2 border-primary pb-2 w-max">
                  Quick Links
                </h1>

                <ul class="list-none mb-0">
                  {options?.map((arg) => (
                    <li key={arg?.id} className="py-2 border-b border-altWhite">
                      <a href="#!" class="text-white  text-xl">
                        {arg?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="mb-6 md:mb-0 md:col-span-2 h-full">
                <h1 class="uppercase text-2xl font-bold mb-2.5 border-b-2 border-primary pb-2 w-max">
                  For Newsletter
                </h1>
                <div className="flex flex-col justify-between py-2 h-full">
                  <div class="md:mb-6">
                    <input
                      type="text"
                      class="
                form-control
                block
                w-2/3
                px-3
                py-3
                text-base
                font-normal
                text-black
                bg-altWhite bg-clip-padding
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                      id="exampleFormControlInput1"
                      placeholder="Enter you Email here"
                    />

                    <div class="md:mr-auto mt-6">
                      <button type="submit" class="btn-alt">
                        Book Now
                      </button>
                    </div>
                  </div>

                  <ul class="list-none md:mb-16 border-t-2 border-primary md:w-2/3">
                    <li className="py-2 ">
                      <a href="#!" class="text-white  text-xl ">
                        APPROVED FROM MINISTRY OF EDUCATION, NEPAL GOVERNMENT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="text-altWhite" />
          <div className="flex items-center justify-between py-6">
            <div class="text-center p-4 text-altWhite text-xl">
              © Copyright 2021. Grace International. All Rights Reserved
            </div>
            <div className="flex gap-4">
              <FaFacebook className="text-3xl text-primary" />
              <FaInstagram className="text-3xl text-primary" />
              <AiFillTwitterCircle className="text-3xl text-primary" />
              <FiMail className="text-3xl text-primary" />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
