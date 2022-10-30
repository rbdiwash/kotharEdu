import React from "react";

import { BiChevronRight } from "react-icons/bi";
import australia from "../../assets/images/australia.png";
import { FiChevronRight } from "react-icons/fi";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import useKothar from "../../context/useKothar";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight />
    </div>
  );
}
const News = () => {
  var settings = {
    dots: false,
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
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const [{ news }, {}] = useKothar();
  return (
    <>
      <section id="news" className="h-max-content pb-8">
        <div className="container mx-auto my-auto h-full  pt-12 md:pt-24">
          <div className="row items-center text-center  h-full my-auto">
            <p className="section-heading pb-10">News and Updates</p>
            <Slider {...settings}>
              {news?.length > 0 &&
                news?.map((item, i) => (
                  <div className="mx-auto relative text-left">
                    <img
                      src={item?.image || australia}
                      alt=""
                      className="rounded  h-[300px] object-cover"
                    />
                    <p className="text-blue py-2 font-semibold">
                      {format(new Date(item?.date), "PPPP")}
                    </p>
                    <p className="text-2xl  text-black leading-tight font-bold tracking-wide pb-3 ">
                      {item?.topic}
                    </p>
                    <p className="pb-2 text-lg">
                      {item?.description?.slice(0, 300)}{" "}
                      {item?.description?.length > 300 && "..."}
                    </p>
                    <Link to={`news/${item?.id}`} state={{ data: item }}>
                      <div className="flex text-blue items-center text-xl space-x-1">
                        <h1 className="">More</h1>
                        <FiChevronRight className="text-2xl cursor-pointer" />
                      </div>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
      <p className="mx-auto text-center font-semibold">
        <Link to="/news">
          <button className="btn-alt text-center mx-auto mt-16">
            More News
          </button>
        </Link>
      </p>
    </>
  );
};

export default News;
