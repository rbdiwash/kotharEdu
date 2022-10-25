import React from "react";
import Slider from "react-slick";
import australia from "../../assets/images/Vector.png";

const AssociatedUni = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="associated" className="md:mb-20">
        <div className="container mx-auto py-12 md:py-24">
          <div className="row">
            <div className="section-heading text-capitalize pb-12 md:pb-24">
              Associated Universities
            </div>
            <Slider {...settings}>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img src={australia} alt="" />
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img src={australia} alt="" />
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img src={australia} alt="" />
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img src={australia} alt="" />
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img src={australia} alt="" />
                </div>
              </div>
              <div className="col-span-1 slider">
                <div className="text-center mx-auto relative">
                  <img src={australia} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssociatedUni;
