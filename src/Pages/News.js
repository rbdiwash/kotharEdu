import React from "react";
import australia from "../assets/images/australia.png";
import { FiChevronRight } from "react-icons/fi";
import ContactForm from "../Components/ContactForm";
import useKothar from "../context/useKothar";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import TakePartEvent from "../Components/TakePartEvent";

const News = () => {
  const [{ news }] = useKothar();

  return (
    <>
      <section id="newsa" className="h-max-content pb-8 bg-lightBlue">
        <div className="container mx-auto my-auto h-full  pt-12 md:pt-24">
          <div className="row items-center   h-full my-auto">
            <p className="section-heading pb-10 text-left">News and Updates</p>

            {news?.length > 0 ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 py-12 justify-center items-center gap-8">
                {news?.map((item, i) => (
                  <div className="col-span-1" key={item?.id}>
                    <div className="mx-auto relative text-left">
                      <img
                        src={item?.image || australia}
                        alt=""
                        className="rounded-lg shadow-lg h-[360px] object-cover"
                      />
                      <p className="text-blue py-2 font-semibold">
                        {format(new Date(item?.date || null), "PPPP")}
                      </p>
                      <Link to={`/news/${item?.id}`} state={{ data: item }}>
                        <p className="text-2xl  text-black leading-tight font-bold tracking-wide pb-3 ">
                          {item?.topic}
                        </p>
                      </Link>
                      <p className="pb-2 text-lg">
                        {item?.description?.slice(0, 300)}{" "}
                        {item?.description?.length > 300 && "..."}
                      </p>
                      <Link to={`/news/${item?.id}`} state={{ data: item }}>
                        <div className="flex text-blue items-center text-xl space-x-1">
                          <h1 className="">More</h1>
                          <FiChevronRight className="text-2xl cursor-pointer" />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[250px] w-full">
                <h1 className="mt-2 text-center text-2xl">
                  Sorry ! No News and Updates found.
                </h1>
              </div>
            )}
          </div>
        </div>
      </section>
      <TakePartEvent />
    </>
  );
};

export default News;
