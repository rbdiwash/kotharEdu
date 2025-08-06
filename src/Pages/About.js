import React from "react";
import {
  BiChevronRight,
  BiTarget,
  BiGlobe,
  BiHeart,
  BiAward,
  BiUser,
  BiMail,
  BiPhone,
  BiTargetLock,
  BiMailSend,
} from "react-icons/bi";
import {
  FiUsers,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import logo from "../assets/images/new_logo.png";
import award from "../assets/images/award.png";
import Anand from "../assets/images/team/Anand Simkhada.JPG";
import Muskan from "../assets/images/team/Muskan Pandey.jpeg";
import Rudra from "../assets/images/team/Rudra Acharya.JPG";
import Divash from "../assets/images/team/Divash.jpeg";
import Annu from "../assets/images/team/Annu.jpeg";
import Sudhan from "../assets/images/team/Sudhan.jpeg";
import Amish from "../assets/images/team/Amish.jpeg";
import Sujith from "../assets/images/team/Sujith.jpeg";

const About = () => {
  const members = [
    {
      name: "Muskan Pandey",
      role: "Director/Senior Educational Consultant",
      number: "T088",
      gmail: "admin@kotharedu.com",
      image: Muskan,
      contact: "0426250365",
    },
    {
      name: "Anand Simkhada",
      role: "Director/ Educational Consultant",
      number: "T290",
      gmail: "admissions@kotharedu.com",
      image: Anand,
      contact: "0405372084",
    },
    {
      name: "Rudra Acharya",
      role: "Director",
      number: "11564",
      gmail: "info@kotharedu.com",
      image: Rudra,
      contact: "0424344135",
    },
    {
      name: "Annu Ghimire",
      role: "Account Officer",
      gmail: "accounts@kotharedu.com",
      image: Annu,
      contact: "0478101261",
    },
    {
      name: "Sudhan Pandey",
      role: "Admin Officer",
      gmail: "info@kotharedu.com",
      image: Sudhan,
      contact: "04050466876",
    },
    {
      name: "Divash Ranabhat",
      role: "Software Engineer",
      gmail: "rbdiwash@gmail.com",
      image: Divash,
      contact: "0430082553",
    },
    {
      name: "Amish Devkota",
      role: "Marketing & Content Creator",
      gmail: "amishDevkota10@gmail.com",
      image: Amish,
      contact: "0424344135",
    },
    {
      name: "Sujith Hiran",
      role: "Marketing & Content Creator",
      gmail: "sujithhiran@gmail.com",
      image: Sujith,
      contact: "0406176233",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expertise",
      desc: "With years of experience in the field, our consultants possess the knowledge and insights needed to guide you through every step of your educational journey.",
      icon: <FiStar className="text-3xl text-primary" />,
    },
    {
      title: "Personalized Approach",
      desc: "We understand that each student is unique. That's why we take the time to understand your individual goals and tailor our services to meet your specific needs.",
      icon: <BiUser className="text-3xl text-primary" />,
    },
    {
      title: "Comprehensive Support",
      desc: "From initial consultation to post-arrival assistance, we're committed to providing you with comprehensive support at every stage of your academic pursuit",
      icon: <FiShield className="text-3xl text-primary" />,
    },
    {
      title: "Global Network",
      desc: "Our extensive network of partner institutions and industry contacts spans across the globe, giving you access to a world of opportunities.",
      icon: <BiGlobe className="text-3xl text-primary" />,
    },
    {
      title: "Success Stories",
      desc: "Our track record speaks for itself. Countless students have entrusted us with their educational aspirations and have gone on to achieve remarkable success in their chosen fields",
      icon: <FiTrendingUp className="text-3xl text-primary" />,
    },
    {
      title: "Transparent Communication",
      desc: "We believe in open and transparent communication, keeping you informed at every step of the process and addressing any concerns or queries promptly.",
      icon: <FiCheckCircle className="text-3xl text-primary" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h- bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-second rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-altSecond rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="pt-20 pb-16">
            {/* Breadcrumb */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 text-gray-600">
                <span className="hover:text-primary transition-colors duration-300 cursor-pointer">
                  Home
                </span>
                <BiChevronRight className="text-xl" />
                <span className="text-primary font-semibold">About Us</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                {/* Company Branding */}
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-white  p-4 ">
                      <img
                        src={logo}
                        alt="Kothar Education Logo"
                        className="h-24 w-auto"
                      />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-6 py-3 text-sm font-medium border border-primary/20">
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></span>
                    </div>
                    <span>Established 2020</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
                    Empowering your,
                    <span className="block text-primary">
                      Educational Journey
                    </span>
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    We are dedicated to transforming educational aspirations
                    into reality. With our expert guidance and comprehensive
                    support, we help students achieve their study abroad dreams
                    across Australia, Canada, UK, and USA.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      500+
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Students Placed
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      4+
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      98%
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Overview Card */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-second/5 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-900">
                        Your Gateway to Global Education
                      </h3>
                      <div className="w-20 h-1 bg-primary rounded-full"></div>
                    </div>

                    <div className="space-y-6 text-gray-600 leading-relaxed">
                      <p>
                        Embark on a journey with Kothar Educational Services,
                        where quality meets opportunity! Founded with a vision
                        to provide top-notch services to students worldwide, we
                        specialize in guiding aspiring scholars towards their
                        educational dreams, particularly those aiming to study
                        in Australia.
                      </p>
                      <p>
                        Our seasoned team, having successfully assisted
                        thousands of clients, is dedicated to delivering
                        personalized counselling to every individual, ensuring
                        their aspirations are realized.
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Expert Guidance
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Personalized Support
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Global Network
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Proven Success
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of our success lies in our unwavering commitment to
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary/40 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BiTargetLock className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide personalized guidance and support to students at all
                stages of their educational journey, helping them achieve their
                academic and career goals while fostering a lifelong love of
                learning.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-second/40 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="w-20 h-20 bg-second/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BiGlobe className="text-second text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-second transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading educational consultancy in the country,
                providing clients with the best guidance and support to help
                them achieve their education and career goals.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-altSecond/40 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="w-20 h-20 bg-altSecond/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BiHeart className="text-altSecond text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-altSecond transition-colors duration-300">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Honesty, responsibility, and excellent service form the core of
                our consultancy. We are committed to providing our clients with
                the best guidance and support possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-second relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We take pride in our accomplishments and the trust our students
              place in us. Our success is measured by the achievements of our
              students worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src={award}
                  alt="Awards and Recognition"
                  className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <BiAward className="text-white text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Local Business Awards 2025 Finalist
                    </h3>
                    <p className="text-white/70 text-sm">
                      Recognition of Excellence
                    </p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We are proud to announce that Kothar Educational Services has
                  been selected as a finalist in the Local Business Awards 2025.
                  This recognition highlights our commitment to excellence in
                  educational consulting and our dedication to helping students
                  achieve their academic dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-second/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FiUsers className="text-primary text-xl" />
              <span className="text-gray-600 font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Management Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make your educational dreams
              a reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members?.map((item, index) => (
              <TeamCard
                key={index}
                name={item?.name}
                role={item.role}
                number={item.number}
                gmail={item.gmail}
                image={item.image}
                contact={item?.contact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-second/5 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose us for your study abroad journey. With personalized
              guidance, expert insights, and unwavering support, we'll ensure a
              seamless transition to your chosen destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs?.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-primary/20">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {item?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

export const TeamCard = ({ name, role, number, gmail, image, contact }) => {
  return (
    <div className="group">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {number && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              QEAC: {number}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                {role}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <BiMailSend className="text-primary text-lg" />
                </div>
                <a
                  href={`mailto:${gmail}`}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {gmail}
                </a>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <BiPhone className="text-primary text-lg" />
                </div>
                <a
                  href={`tel:${contact}`}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
