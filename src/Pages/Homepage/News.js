import React from "react";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import australia from "../../assets/images/australia.png";
import { FiChevronRight } from "react-icons/fi";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import useKothar from "../../context/useKothar";

const News = () => {
  var settings = {
    dots: false,
    infinite: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const [{ news }, {}] = useKothar();
  const isHTML = (text) => {
    const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
    return htmlRegex.test(text);
  };

  const purifyHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.innerHTML; // Sanitized HTML
  };

  const extractPartOfParagraph = (html, maxLength) => {
    // Step 1: Purify the HTML
    const purifiedHTML = purifyHTML(html);

    // Step 2: Create a temporary element to hold the HTML
    const tempElement = document.createElement("div");
    tempElement.innerHTML = purifiedHTML;

    // Step 3: Get the text content (without HTML tags)
    const textContent = tempElement.textContent || tempElement.innerText;

    // Step 4: Extract the first `maxLength` characters
    const extractedText = textContent.slice(0, maxLength);

    // Step 5: Optionally, add ellipsis if the text was truncated
    return textContent.length > maxLength
      ? `${extractedText}...`
      : extractedText;
  };
  return (
    <>
      <section id="news" className="h-max-content pb-8">
        <div className="container mx-auto my-auto h-full  pt-12 md:pt-24">
          <div className="row items-center text-center  h-full my-auto">
            <p className="section-heading py-10">News and Updates</p>
            <Slider {...settings}>
              {news?.length > 0 ? (
                news?.map((item, i) => (
                  <div className="mx-auto relative text-left" key={i}>
                    <img
                      src={item?.image || australia}
                      alt=""
                      className="rounded  h-[350px] w-full mx-auto object-cover"
                    />
                    <p className="text-blue py-2 font-semibold">
                      {format(new Date(item?.date || null), "PPPP")}
                    </p>
                    <p className="text-2xl  text-black leading-tight font-bold tracking-wide pb-3 ">
                      {item?.topic}
                    </p>
                    {isHTML(item?.description) ? (
                      <div>
                        {extractPartOfParagraph(item?.description, 200)}
                      </div>
                    ) : (
                      <p className="pb-2 text-lg">
                        {item?.description?.slice(0, 200)}{" "}
                        {item?.description?.length > 200 && "..."}
                      </p>
                    )}
                    <Link to={`news/${item?.id}`} state={{ data: item }}>
                      <div className="flex text-blue items-center text-xl space-x-1">
                        <h1 className="">More</h1>
                        <FiChevronRight className="text-2xl cursor-pointer" />
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <h1 className="mt-2 text-center text-2xl relative">
                  No News & Updates.
                </h1>
              )}
            </Slider>
          </div>
        </div>
      </section>
      {news?.length > 0 && (
        <p className="mx-auto text-center font-semibold">
          <Link to="/news">
            <button className="btn-alt text-center mx-auto mt-16">
              More News
            </button>
          </Link>
        </p>
      )}
    </>
  );
};

export default News;
