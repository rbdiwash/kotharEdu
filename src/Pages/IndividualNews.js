import { format } from "date-fns/esm";
import React, { useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useParams } from "react-router-dom";
import TakePartEvent from "../Components/TakePartEvent";
import useKothar from "../context/useKothar";

const IndividualNews = () => {
  const { id } = useParams();
  const [{ news }] = useKothar();

  const newsData = news?.find((item) => item?.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        id="bookCover"
        style={{
          backgroundImage: `url(${newsData?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        <div className="container mx-auto md:py-48 py-24 relative z-10">
          <div className="flex items-center space-x-3 text-white mb-6">
            <h1 className="font-semibold text-white"> Home</h1>
            <BiChevronRight className="text-3xl" />
            <span>Explore</span> <BiChevronRight className="text-3xl" />
            <span className="text-primary font-bold">News and Updates</span>
          </div>

          <p className="text-2xl text-white md:mt-12 mt-4 leading-9 tracking-wide uppercase font-semibold">
            {format(new Date(newsData?.date || null), "PPPP")}
          </p>
          <p className="text-4xl font-bold text-white mt-2 leading-9 tracking-wide drop-shadow-lg">
            {newsData?.topic}
          </p>
        </div>
      </section>
      <section id="detailNews" className="bg-lightBlue">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-6 md:gap-x-12 gap-x-0 gap-y-4">
            <div className="md:col-span-2 col-span-6">
              <img
                src={newsData?.image}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="md:col-span-4 col-span-6 ">
              <div
                className="font-xl"
                dangerouslySetInnerHTML={{ __html: newsData?.description }}
              />

              {/* <p className="text-black font-medium text-justify">
                {data?.description}
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <TakePartEvent />
    </>
  );
};

export default IndividualNews;
