import React, { useEffect, useState } from "react";
import australia from "../../assets/images/australia.png";
import Slider from "react-slick";
// import axios from "../../Utils/Axios";
import axios from "axios";
import { BiChevronRight, BiChevronLeft, BiMap } from "react-icons/bi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "gray" }}
      onClick={onClick}
    >
      <BiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <BiChevronLeft />
    </div>
  );
}
const Cities = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    axios
      .get("/destinations")
      .then((res) => {
        console.log(res);
        setDestinations(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section id="cities" className="h-max-content">
      <div className="container mx-auto text-center py-12 md:py-24">
        <div className="row ">
          <p className="section-heading">Where do you want to study?</p>
          <p className="section-subHeading">
            We recommend you the Best college in best <br /> destination to
            build your career.
          </p>

          <div className="my-16">
            <Slider {...settings}>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img
                    src={australia}
                    alt=""
                    className="rounded outline outline-2 outline-white outline-offset-[-16px]	mx-auto"
                  />
                  <div className="title absolute text-3xl font-bold top-1/2 left-1/2 text-primary slider-text translate-x-[-50%] translate-y-[-50%]">
                    Australia
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
