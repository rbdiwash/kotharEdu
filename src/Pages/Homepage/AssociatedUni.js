import React from "react";
import Slider from "react-slick";
import australia from "../../assets/images/australia.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useKothar from "../../context/useKothar";

const AssociatedUni = ({ title, subtitle, destinationId }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [{ uniList }, {}] = useKothar();

  const getFilteredList = () => {
    if (!destinationId) return uniList;
    else {
      let filteredList =
        uniList.filter((arg) => arg?.destId === destinationId) || uniList;
      return filteredList;
    }
  };

  return (
    <>
      <section id="associated" className="md:mb-20">
        <div className="container mx-auto py-12 md:py-24">
          <div className="row">
            <div className="section-heading text-capitalize">
              {title || "Associated Colleges/Universities"}
            </div>
            {subtitle && (
              <div className="section-subHeading text-altBlack ">
                {subtitle}
              </div>
            )}
            <div className="pt-12 md:pt-24">
              <Slider {...settings}>
                {getFilteredList()?.length > 0 ? (
                  getFilteredList()?.map((item) => (
                    <div className="col-span-1 slide" key={item?.id}>
                      <div className="text-center mx-auto relative">
                        <img
                          src={item?.image || australia}
                          alt=""
                          className="rounded h-[320px] w-full object-cover"
                        />
                        <a href={item?.website}>
                          <h1 className="mt-2 w-full break-words font-bold hover:text-blue">
                            {item?.name}
                          </h1>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1 className="mt-2 text-center text-2xl">
                    No Universities available at the moment.
                  </h1>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssociatedUni;
